import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import firebase from 'firebase';

import List from '../components/List';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoList(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    let unsubscribe = () => {};
    const { currentUser } = firebase.auth();
    if (currentUser) {
      setIsLoading(true);
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
        setIsLoading(false);
      }, (error) => {
        setIsLoading(false);
        console.log('Error', error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }

    return unsubscribe;
  }, []);

  if (0 === memos.length) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading}/>
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
          <Button
            style={emptyStyles.button}
            label="作成する"
            onPress={() => {
              navigation.navigate('MemoCreate');
            }}
          />
        </View>
      </View>
    );
  }

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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    marginBottom: 24,
  },

  button: {
    alignSelf: 'center',
  },
});
