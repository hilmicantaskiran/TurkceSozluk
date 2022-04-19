import React from 'react'
import { StatusBar, Animated, LogBox, FlatList, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import theme from '../utils/theme'

import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'
import Background from '../components/bg'
import { CardContainer, CardSummary, CardTitle } from '../components/card'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

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

const HERO_HEIGHT = 230

function SearchView({navigation}) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']) /* ignore Animated useNativeDriver warning to avoid log spam */
    if (isSearchFocus) {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230
      }).start()
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 230
      }).start()
    } else {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230
      }).start()
      // hero-height
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 230
      }).start()
    }
  }, [heroHeight, bgOpacity, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(isSearchFocus ? theme.colors.softRed : theme.colors.red)
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
      <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
        <Box as={Animated.View} style={{ opacity: bgOpacity }}>
          <Background>
            <Box flex={1} justifyContent='center' alignItems='center'>
              <TdkLogo color={theme.colors.white} />
            </Box>
          </Background>
        </Box>
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
          <Box flex={1}>
            <FlatList
              data={DATA}
              style={{ padding: 16 }}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>Son Aramalar</Text>
              }
            />
          </Box>
        ) : (
          <Box flex={1} px={16} py={40}>
            <Box>
              <Text color="textLight">Bir Kelime</Text>
              <CardContainer mt={10} onPress={() => navigation.navigate('Detail', {title: 'on para'})}>
                { homeData ? (
                  <>
                    <CardTitle>{ homeData?.kelime[0].madde }</CardTitle>
                    <CardSummary>{ homeData?.kelime[0].anlam }</CardSummary>
                  </>
                ) : (
                  <ActivityIndicator size="large" color={theme.colors.textLight} />
                )}
                  
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text color="textLight">Bir Deyim - Atasözü</Text>
              <CardContainer mt={10} onPress={() => navigation.navigate('Detail', {title: 'siyem siyem ağlamak'})}>
                { homeData ? (
                  <>
                    <CardTitle>{ homeData?.atasoz[0].madde }</CardTitle>
                    <CardSummary>{ homeData?.atasoz[0].anlam }</CardSummary>
                  </>
                ) : (
                  <ActivityIndicator size="large" color={theme.colors.textLight} />
                )}
              </CardContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
