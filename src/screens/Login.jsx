import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';

export default function Login() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <Text>Log In</Text>
        <TextInput value="email-address" />
        <TextInput value="password" />
        <View>
          <Text>Submit</Text>
        </View>
        <View>
          <Text>Not Registered?</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
