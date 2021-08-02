import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../avatar';
import { styles } from './profile.styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://github.com/jeseias.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Jeseías</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitoria</Text>
      </View>
    </View>
  );  
}