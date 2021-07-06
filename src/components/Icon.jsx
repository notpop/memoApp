import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import { number, string, oneOf } from 'prop-types';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function Icon(props) {
  const [isFontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);

  if ( ! isFontLoaded) {
    return null;
  }

  return <CustomIcon name={name} size={size} color={color} />;
}

Icon.propTypes = {
  name: oneOf(['plus', 'delete', 'pencil', 'check']).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
};