import React from 'react';
import { TouchableOpacityProps, View, TouchableOpacity, Text } from 'react-native';
import { GuildIcon } from '../guild-icon';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { styles } from './guild.styles';

export interface GuildItemProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface GuildProps extends TouchableOpacityProps {
  data: GuildItemProps;
}

export function Guild({ data, ...rest }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={18} />
    </TouchableOpacity>
  );
}
