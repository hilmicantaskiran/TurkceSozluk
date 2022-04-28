import React from 'react'
import { Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Box from './box'
import Input from './input'
import Text from './text'
import Button from './button'
import theme from '../utils/theme'
import { CloseCircle, Search } from './icons'

function SearchBox({ navigation, onChangeFocus, onSubmitEditing }) {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [isFocus, onChangeFocus]) 

  const onCancel = () => {
    setFocus(false)
    setValue('')
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  const onSubmitted = text => {
    storeSearched(text)

    navigation.navigate('Detail', {
      title: 'Detay',
      keyword: text,
    })
  }

  const storeSearched = async value => {
    console.log('storeSearched', value)
    try {
      const data = await AsyncStorage.getItem('@searched')

      if (data) {
        const parsedData = JSON.parse(data)
        const mergedData = [value, ...parsedData]

        if (mergedData.length > 5) {
          mergedData.pop()
        }

        await AsyncStorage.setItem('@searched', JSON.stringify(mergedData)).then(
          () => {
            onSubmitEditing()
          },
        )
        
      } else {
        await AsyncStorage.setItem('@searched', JSON.stringify([value]))
      }
    } catch (e) {
      console.log(e)
    }

    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 24,
            elevation: 2,
          }}
          bg="white"
          color="textDark"
          pl={52}
          height={52}
          value={value}
          borderWidth={1}
          borderColor={isFocus ? "#D1D1D1" : "transparent"}
          borderRadius="normal"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          onFocus={() => setFocus(true)}
          onChangeText={text => setValue(text)}
          onSubmitEditing={event => onSubmitted(event.nativeEvent.text)}
        />

        { value.length > 0 && (
           <Button onPress={onClear} position="absolute" right={16} top={14}>
            <CloseCircle color={theme.colors.textDark} />
          </Button>
        )}
  
        <Button position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
      </Box>

      { isFocus && (
        <Button onPress={onCancel} height={52} px={15}>
          <Text color="black">Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
