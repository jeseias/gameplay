import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../avatar';
import { styles } from './member.styles';

interface MemberItemProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface MemberProps {
  data: MemberItemProps;
}

export function Member({ data }: MemberProps) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar imageUrl={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View style={[styles.bulletStatus, { backgroundColor: isOnline ? on : primary }]} />
          <Text style={styles.nameStatus}>{isOnline ? 'Disponivel' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}
