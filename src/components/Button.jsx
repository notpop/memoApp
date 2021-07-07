import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.bottonContainer}>
      <Text style={styles.bottonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  bottonContainer: {
    backgroundColor: '#7FB3D5',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  bottonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: 'white',
  },
});
