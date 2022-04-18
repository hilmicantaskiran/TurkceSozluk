import React from 'react'
import { StatusBar, Animated, LogBox, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import theme from '../utils/theme'

import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'
import Background from '../components/bg'
import { CardContainer, CardSummary, CardTitle } from '../components/card'

import { TdkLogo } from '../components/icons'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Başlık 1',
    summary: 'Açıklama 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Başlık 2',
    summary: 'Açıklama 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Başlık 3',
    summary: 'Açıklama 3'
  }
]

function SearchView({navigation}) {
  const [heroHeight] = React.useState(new Animated.Value(285))
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']) /* ignore Animated useNativeDriver warning to avoid log spam */
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 300
      }).start()
    } else {
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
          <Background>
            <Box flex={1} justifyContent='center' alignItems='center'>
              <TdkLogo color={theme.colors.white} />
            </Box>
          </Background>
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
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        { isSearchFocus ? (
          <Box flex={1} p={16}>
            <Text color="textDark"> 
              geçmiş aramalar
            </Text>
          </Box>
        ) : (
          <Box flex={1} px={16} py={40}>
            <Box>
              <Text color="textLight">Bir deyim</Text>
              <CardContainer mt={10} onPress={() => navigation.navigate('Detail')}>
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text color="textLight">Bir deyim - Atasözü</Text>
              <CardContainer mt={10} onPress={() => navigation.navigate('Detail')}>
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>hafif hafif, ince ince, durmadan gözyaşı dökmek.</CardSummary>
              </CardContainer>
            </Box>
            {/*
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Box py={5}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={item => item.id}
            />
            */}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
