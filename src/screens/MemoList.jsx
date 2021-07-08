import React from 'react';
import { View, StyleSheet } from 'react-native';

import List from '../components/List';
import CircleButton from '../components/CircleButton';

export default function MemoList(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <List />
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
