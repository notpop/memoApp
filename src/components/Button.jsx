import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.bottonContainer, style]} onPress={onPress}>
      <Text style={styles.bottonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
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
