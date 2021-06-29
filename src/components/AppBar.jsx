import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo</Text>
        <Text style={styles.appbarRight}>LogOut</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 90,
    backgroundColor: '#A9CCE3',
    justifyContent: 'flex-end',
  },

  appbarInner: {
    alignItems: 'center',
  },

  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 12,
    color: 'white',
  },

  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});
