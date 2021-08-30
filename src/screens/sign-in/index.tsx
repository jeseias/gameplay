import React from 'react';
import {
  Alert, Image, Text, View,
} from 'react-native';
import { styles } from './sign-in.styles';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/button-icon';
import { Background } from '../../components/background';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />
        <View style={styles.content}>
          <Text style={styles.title}>
            Connect-se
            {' '}
            {'\n'}
            e organize suas
            {' '}
            {'\n'}
            jogatinas
          </Text>
          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games
            {' '}
            {'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
