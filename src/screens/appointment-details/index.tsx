import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/background';
import { Header } from '../../components/header';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import BannerImg from '../../assets/banner.png';
import { styles } from './appointment-details.styles';
import { ListHeader } from '../../components/list-header';
import { Member } from '../../components/member';
import { ListDivider } from '../../components/list-divider';
import { ButtonIcon } from '../../components/button-icon';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Jeseias',
      avatar_url: 'https://github.com/jeseias.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Jeseias',
      avatar_url: 'https://github.com/jeseias.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subTitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
