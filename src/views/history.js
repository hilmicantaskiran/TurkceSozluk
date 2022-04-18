import React from 'react'
import { Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#f8f9fa')
    }, [])
  ) 

  return (
    <Box flex={1} as={SafeAreaView} justifyContent='center' alignItems='center'>
      <Text style={{ color: 'black' }}>Arama Geçmişi</Text>
    </Box>
  )
}

export default HistoryView
