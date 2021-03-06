import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Appointment } from '../../components/appointment';
import { Background } from '../../components/background';
import { ButtonAdd } from '../../components/button-add';
import { CategorySelect } from '../../components/category-select';
import { ListDivider } from '../../components/list-divider';
import { ListHeader } from '../../components/list-header';
import { Profile } from '../../components/profile';
import { styles } from './home.styles';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '18/06 às 21:00h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '2',
      date: '18/06 às 21:00h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  function handleCategorySelected(categoryID: string) {
    categoryID === category ? setCategory('') : setCategory(categoryID);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelected} />
      <ListHeader title="Partidas agendadas" subTitle="Total 6" />
      <FlatList
        data={appointments}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment data={item} style={styles.matches} onPress={handleAppointmentDetails} />
        )}
      />
    </Background>
  );
}
