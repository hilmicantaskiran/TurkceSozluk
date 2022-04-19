import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import LoaderText from '../components/LoaderText'
import ActionButton, { ActionButtonTitle } from '../components/action-button'
import DetailSummaryItem from '../components/detail-summary-item'

import theme from '../utils/theme'

import { Hand, Voice, FavSolid, Bookmark } from '../components/icons'

function DetailView({ route }) {
  const keyword = route.params?.keyword
  const [data, setDetailData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.softRed)
    }, [])
  ) 

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=test&ara=${keyword}`)
    const data = await response.json()
    setDetailData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box flex={1} as={SafeAreaView} bg="softRed">
      <Box as={ScrollView} >
        <Box py={8} px={16}>
          <Text color='black' fontSize={32} fontWeight="bold">{keyword}</Text>
          { (data?.telaffuz || data?.lisan) ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz} {data?.lisan}
            </Text>
          ) : null }
        </Box>
        <Box flexDirection="row" mt={16} px={16}>
          <ActionButton px={12} disabled={!data}>
            <Voice width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={6} px={12} disabled={!data}>
            <Bookmark width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" px={12} disabled={!data}>
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle color="textLight">Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={32} p={16}>
          { data 
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItem data={item} border={item.anlam_sira !== '1'} radiusTop={item.anlam_sira === '1'} radiusBottom={item.anlam_sira === data.anlam_say} key={item.anlam_id} />
              ),
            )
          : (
            [1, 2, 3].map(index => (
              <DetailSummaryItem border={index !== 1} radiusTop={index === 1} radiusBottom={index === 3} key={index}>
                <LoaderText />
                <LoaderText width={200} mt={10} />
              </DetailSummaryItem>
            ))
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
