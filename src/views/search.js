import React from 'react'
import { ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import theme from '../utils/theme'
import bg from '../assets/images/bg.jpg'

import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'

import { TdkLogo } from '../components/icons'

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.red)
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.red} />
      <Box position="relative" zIndex={1} height={isSearchFocus ? 1 : 285}>
        <Box 
          as={ImageBackground} 
          source={bg} 
          style={{ width: '100%', height: '100%' }}
        >
          <Box flex={1} justifyContent='center' alignItems='center' display={isSearchFocus ? 'none' : 'flex'}>
            <TdkLogo size={100} color={theme.colors.white} />
          </Box>
          <Box width="100%" mb={-42}  p={16}>
            <Search onChangeFocus={status => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>
      <Box flex={1} bg="#f8f9fa" py={isSearchFocus ? 64 : 26} px={26}>
        <Box flex={1} p={16}>
          <Text color="textDark"> 
            Türkçe Sözlük
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchView
