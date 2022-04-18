import React from 'react'

import theme from '../utils/theme'

import Box from '../components/box'
import Text from '../components/text'
import Button from '../components/button'
import Search from '../components/search'

import { TdkLogo } from '../components/icons'

function SearchView({ navigation }) {
  return (
    <Box>
      <Button
        width={80}
        height={40}
        bg="red"
        mt={20}
        alignSelf="center"
        borderRadius="normal"
        onPress={() => navigation.navigate('Detail')}
      >
        <Text color="white">Detay</Text>
      </Button>

      <Box py={20} alignSelf="center">
        <TdkLogo color={theme.colors.red} />
      </Box>

      <Box p={5}>
        <Search />
      </Box>
    </Box>
  )
}

export default SearchView
