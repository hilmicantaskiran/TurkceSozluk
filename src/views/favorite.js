import React from 'react'
import { StatusBar, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'

function FavoriteView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#f8f9fa')
    }, [])
  ) 

  return (
    <Box flex={1} as={SafeAreaView} justifyContent='center' alignItems='center'>
      <Text style={{ color: 'black' }}>Favoriler</Text>
    </Box>
  )
}

export default FavoriteView
