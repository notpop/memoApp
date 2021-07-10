import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import List from '../components/List';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoList(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    let unsubscribe = () => {};
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const database = firebase.firestore();
      const reference = database.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = reference.onSnapshot((snapShot) => {
        const userMemos = [];
        snapShot.forEach((document) => {
          //console.log(document.id, document.data());
          const id = document.id;
          const data = document.data();
          const bodyText = data.bodyText;
          const updatedAt = data.updatedAt.toDate();
          userMemos.push({
            id,
            bodyText,
            updatedAt,
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log('Error', error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <List memos={memos}/>
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
  },
});
