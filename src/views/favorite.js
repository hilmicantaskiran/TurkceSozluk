import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'

import theme from '../utils/theme'

function FavoriteView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.softRed)
    }, [])
  ) 

  return (
    <Box flex={1} as={SafeAreaView} justifyContent='center' alignItems='center' bg="softRed">
      <Text color='black'>Favoriler</Text>
    </Box>
  )
}

export default FavoriteView
