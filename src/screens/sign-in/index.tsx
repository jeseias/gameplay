import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from './sign-in.styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/button-icon'

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          Suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={.7}
        />
      </View>
    </View>
  )
}