import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
import firebase from 'firebase';

import Icon from './Icon';
import { dateToString } from '../helpers';
export default function List(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function deleteMemo(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const database = firebase.firestore();
      const reference = database.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('メモを削除します','よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除',
          style: 'destructive',
          onPress: () => {
            reference.delete()
            .catch(() => {
              Alert.alert('削除に失敗しました');
            });
          },
        }
      ]);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { deleteMemo(item.id); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

List.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  memoListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    backgroundColor: 'white',
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: '400',
    color: 'black',
  },

  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: 'gray',
    alignItems: 'center',
  },

  memoDelete: {
    padding: 8,
  },
});
