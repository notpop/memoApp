import React from 'react';
import {
 View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetail() {
  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年6月28日 16:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          ・にんじん
          ・ごぼう
          ・ピーマン
          ・豚肉
          ・ごま油
          dawdwmakdmkawmdkamdkmakdmkamkdmakmd
          dwamdkwmadklmawldmwakmdkamdk
          dawmdklwamdklamdlmadlmawlkd
        </Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: 'auto' }}></CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  memoHeader: {
    backgroundColor: '#A9CCE3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },

  memoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
