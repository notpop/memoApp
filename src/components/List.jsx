import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from './Icon';

export default function List() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年6月28日 16:00</Text>
        </View>

        <TouchableOpacity>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </View>

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
});
