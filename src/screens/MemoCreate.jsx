import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { translateErrors } from '../helpers';

export default function MemoCreate(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const database = firebase.firestore();
    const reference = database.collection(`users/${currentUser.uid}/memos`);

    reference.add({
      bodyText,
      updatedAt: new Date(),
    })
    .then(() => {
      navigation.goBack();
    })
    .catch((error) => {
      const errorMessage = translateErrors(error.code);
      Alert.alert(errorMessage.title, errorMessage.description);
    });
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          autoFocus
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
        />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
