import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Background } from '../../components/background';
import { CategorySelect } from '../../components/category-select';
import { Header } from '../../components/header';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

import { styles } from './appointment-create.styles';
import { GuildIcon } from '../../components/guild-icon';
import { SmallInput } from '../../components/small-input';
import { TextArea } from '../../components/text-area';
import { Button } from '../../components/button';
import { ModalView } from '../../components/modal-view';
import { Guilds } from '../guilds';
import { GuildItemProps } from '../../components/guild';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildModal, setOpenGuildModal] = useState(false);
  const [guild, setGuild] = useState<GuildItemProps>({} as GuildItemProps);

  function handleCategorySelected(categoryID: string) {
    setCategory(categoryID);
  }

  function handleOpenGuilds() {
    setOpenGuildModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildModal(false);
  }

  function handleGuildSelect(selectedGuild: GuildItemProps) {
    setGuild(selectedGuild);
    setOpenGuildModal(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />
          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelected}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>
                <Feather name="chevron-right" color={theme.colors.heading} size={18} />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e m??s</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descri????o</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
