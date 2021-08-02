import React from 'react'
import { RectButton, RectButtonProperties, ScrollView } from 'react-native-gesture-handler'
import { styles } from './category-select.styles' 
import { categories } from '../../utils/categories'
import { Category } from '../category'

interface CategorySelectProps {
  categorySelected: string;
  setCategory: (categoryID: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(({ id, title, icon }) => (
        <Category key={id} title={title} icon={icon} checked={id === categorySelected} onPress={() => setCategory(id)} />
      ))}
    </ScrollView>
  )
}