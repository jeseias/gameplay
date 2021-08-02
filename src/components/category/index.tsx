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
  hasCheckBox?: boolean;
  checked?: boolean
}


export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest }: CategoryProps) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors
  
  return (
    <RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
        <LinearGradient
          colors={[checked ? secondary85 : secondary50, secondary40]}
          style={[styles.content, { opacity: checked ? 1 : .5 }]}
        >
          {hasCheckBox && <View style={checked ? styles.checked : styles.check} />}
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}