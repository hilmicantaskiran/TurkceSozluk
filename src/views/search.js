import React from 'react'
import { Text } from 'react-native'

import theme from '../utils/theme'
import Button from '../components/button'
import BoxCenter from '../components/box-center'
import { TdkLogo } from '../components/icons'

function SearchView({ navigation }) {
  return (
    <BoxCenter>
      <Button
        width={80}
        height={40}
        bg="red"
        mb={20}
        borderRadius="normal"
        onPress={() => navigation.navigate('Detail')}
      >
        <Text style={{ color: 'white' }}>Detay</Text>
      </Button>
      <TdkLogo color={theme.colors.red} />
    </BoxCenter>
  )
}

export default SearchView
