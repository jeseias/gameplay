import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';

import { styles } from './avatar.styles';
import { theme } from '../../global/styles/theme';

interface AvatarProps {
  imageUrl: string;
}

export function Avatar({ imageUrl }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
      <Image style={styles.avatar} source={{ uri: imageUrl }} />
    </LinearGradient>
  );
}
