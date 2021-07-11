import React, { useEffect, useState } from 'react';
import {
 View, ScrollView, Text, StyleSheet,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../helpers';

export default function MemoDetail(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    let unsubscribe = () => {};
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const database = firebase.firestore();
      const reference = database.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = reference.onSnapshot((document) => {
        const data = document.data();
        const id = document.id;
        const bodyText = data.bodyText;
        const updatedAt = data.updatedAt.toDate();
        setMemo({
          id,
          bodyText,
          updatedAt,
        });
      });
    }

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>

      <ScrollView>
        <View style={styles.memoBodyInner}>
          <Text style={styles.memoText}>
            {memo && memo.bodyText}
          </Text>
        </View>
      </ScrollView>

      <CircleButton
        style={{ top: 55, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
    </View>
  );
}

MemoDetail.propTypes = {
  route: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

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

  memoBodyInner: {
    paddingTop: 32,
    paddingBottom: 80,
    paddingHorizontal: 27,
  },

  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
