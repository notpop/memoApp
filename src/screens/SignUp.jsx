import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="email-address" />
        <TextInput style={styles.input} placeholder="password" />
        <Button label='Submit' />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Registered?</Text>
          <Text style={styles.footerLink}>Log In.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
  },

  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },

  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#7FB3D5',
  },

  footer: {
    flexDirection: 'row',
  },
});