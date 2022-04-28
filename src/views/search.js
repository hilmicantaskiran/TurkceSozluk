import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Box from '../components/box'
import SuggestionCard from '../components/suggestion-card'
import HomeSearch from '../components/home-search'
import SearchHistoryList from '../components/search-history-list'

import theme from '../utils/theme'

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

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState(null)
  const [searchHistory, setSearchHistory] = React.useState([])

  const getSearched = async () => {
    try {
      const data = await AsyncStorage.getItem('@searched')
      const parsedData = JSON.parse(data) || []
      setSearchHistory(parsedData)
    } catch (e) {
      console.log(e)
    }
  }

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getSearched()
    getHomeData()
  }, [setSearchHistory, setHomeData])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(
          isSearchFocus ? theme.colors.softRed : theme.colors.red
        )
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      <HomeSearch
        navigation={navigation}
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
        onSubmitEditing={getSearched}
      />
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList
              navigation={navigation}
              data={searchHistory}
            />
          </Box>
        ) : (
          <Box flex={1} px={16} py={40}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title={'Bir Kelime'}
              onPress={() =>
                navigation.navigate('Detail', {
                  title: 'Detay',
                  keyword: homeData?.kelime[0].madde
                })
              }
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title={'Bir Deyim - Atasözü'}
              onPress={() =>
                navigation.navigate('Detail', {
                  title: 'Atasözleri ve Deyimler',
                  keyword: homeData?.atasoz[0].madde
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
