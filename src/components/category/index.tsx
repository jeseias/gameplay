import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme'
import { styles } from './category.styles'

interface CategoryProps extends RectButtonProperties {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean
}


export function Category({ title, icon: Icon, checked = false, ...rest }: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors
  
  return (
    <RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
        <View style={[styles.content, { opacity: checked ? 1 : .4 }]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}