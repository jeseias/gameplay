import React from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { styles } from './button-add.styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'

export function ButtonAdd({ ...rest }: RectButtonProperties  ) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}