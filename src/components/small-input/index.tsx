import React from 'react';

import { TextInput, TextInputProps } from 'react-native';
import { styles } from './small-input.styles';

export function SmallInput({ ...rest }: TextInputProps) {
  return <TextInput keyboardType="number-pad" style={styles.container} {...rest} />;
}
