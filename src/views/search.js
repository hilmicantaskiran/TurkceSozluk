import React from 'react'
import { ImageBackground, StatusBar, Animated, LogBox } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import theme from '../utils/theme'
import bg from '../assets/images/bg.jpg'

import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'

import { TdkLogo } from '../components/icons'

function SearchView() {
  const [heroHeight] = React.useState(new Animated.Value(285))
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']) /* ignore Animated useNativeDriver warning to avoid log spam */
    if (isSearchFocus) {
      console.log(heroHeight)
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 300
      }).start()
    } else {
      console.log(heroHeight)
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 300
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(isSearchFocus ? theme.colors.softRed : theme.colors.red)
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
      <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
        { !isSearchFocus && (
          <Box 
            as={ImageBackground} 
            source={bg} 
            style={{ width: '100%', height: '100%' }}
          >
            <Box flex={1} justifyContent='center' alignItems='center'>
              <TdkLogo color={theme.colors.white} />
            </Box>
          </Box>
        )}
        <Box 
          position="absolute"
          left={0}
          right={0}
          bottom={isSearchFocus ? 0 : -42}
          width="100%" 
          p={16}
        >
          <Search onChangeFocus={status => setSearchFocus(status)} />
        </Box>
      </Box>
      <Box flex={1} bg="white" p={isSearchFocus ? 0 : 26}>
        { isSearchFocus ? (
          <Box flex={1} p={16}>
            <Text color="textDark"> 
              geçmiş aramalar
            </Text>
          </Box>
        ) : (
          <Box flex={1} p={16}>
            <Text color="textDark"> 
              öneriler
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
