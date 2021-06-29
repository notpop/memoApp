import React from 'react';
import { View, StyleSheet } from 'react-native';
import { shape, string } from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <AntDesign name="plus" size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  children: string,
  style: shape(),
};

CircleButton.defaultProps = {
  children: '+',
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#7FB3D5',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    bottom: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, heigth: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },

  circleButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});