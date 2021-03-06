import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../guild-icon';
import { styles } from './appointment.styles';

import PlayerSVG from '../../assets/player.svg';
import CalenderSVG from '../../assets/calendar.svg';
import { theme } from '../../global/styles/theme';
import { GuildItemProps } from '../guild';

export interface AppointmentItemProps {
  id: string;
  guild: GuildItemProps;
  category: string;
  date: string;
  description: string;
}

interface AppointmentProps extends RectButtonProperties {
  data: AppointmentItemProps;
}

export function Appointment({ data, ...rest }: AppointmentProps) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const {
    primary, on, secondary50, secondary70,
  } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient style={styles.guildIconContainer} colors={[secondary50, secondary70]}>
          <GuildIcon />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalenderSVG />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSVG fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
