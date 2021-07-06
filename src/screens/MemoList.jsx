import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import List from '../components/List';
import CircleButton from '../components/CircleButton';

export default function MemoList() {
  return (
    <View style={styles.container}>
      <AppBar />
      <List />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
  },
});
