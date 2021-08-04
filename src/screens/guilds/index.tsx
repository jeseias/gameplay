import React from 'react';
import { FlatList, View } from 'react-native';
import { Guild, GuildItemProps } from '../../components/guild';
import { ListDivider } from '../../components/list-divider';

import { styles } from './guilds.styles';

interface GuildsProps {
  handleGuildSelect: (guild: GuildItemProps) => void;
}

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Galera do game',
      icon: 'image.png',
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildSelect(item)} />}
      />
    </View>
  );
}
