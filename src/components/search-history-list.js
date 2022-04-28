import React from 'react'
import { FlatList } from 'react-native'

import Box from './box'
import Text from './text'
import { SimpleCardContainer, SimpleCardTitle } from './simple-card'

function SearchHistoryList({ navigation, data }) {
  return (
    <FlatList
      data={data}
      style={{ padding: 16 }}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <Box py={6} px={0} key={index}>
          <SimpleCardContainer
            onPress={() =>
              navigation.navigate('Detail', {
                title: 'Detay',
                keyword: item
              })
            }
          >
            <SimpleCardTitle>{item}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
      ListHeaderComponent={
        <Text color="textLight" mb={10}>
          Son Aramalar
        </Text>
      }
    />
  )
}

export default SearchHistoryList
