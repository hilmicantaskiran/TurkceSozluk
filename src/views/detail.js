import React from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import { Hand, Voice, FavSolid } from '../components/icons'
import ActionButton, { ActionButtonTitle } from '../components/action-button'
import { DetailSummaryItemContainer, DetailSummaryItemTitle, DetailSummaryItemSummary } from '../components/detail-summary-item'

import theme from '../utils/theme'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor(theme.colors.softRed)
    }, [])
  ) 

  return (
    <Box flex={1} as={SafeAreaView} bg="softRed">
      <Box as={ScrollView} >
        <Box py={8} px={16}>
          <Text color='black' fontSize={32} fontWeight="bold">Detay</Text>
          <Text color="textLight" mt={6}>Arapça kalem</Text>
        </Box>
        <Box flexDirection="row" mt={16} px={16}>
          <ActionButton px={12}>
            <Voice width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={6} px={12}>
            <FavSolid width={24} height={24} color={theme.colors.red} />
          </ActionButton>
          <ActionButton ml="auto" px={12} >
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle color="textLight">Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={32} p={16}>
          <DetailSummaryItemContainer radiusTop>
            <DetailSummaryItemTitle>Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:</DetailSummaryItemTitle>
            <DetailSummaryItemSummary>"Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:</DetailSummaryItemTitle>
            <DetailSummaryItemSummary>"Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:</DetailSummaryItemTitle>
            <DetailSummaryItemSummary>"Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border radiusBottom mb={10}>
            <DetailSummaryItemTitle>Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:</DetailSummaryItemTitle>
            <DetailSummaryItemSummary>"Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
