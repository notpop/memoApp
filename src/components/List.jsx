import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';

export default function List() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
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
