import React from 'react'
import { Keyboard } from 'react-native'

import Box from './box'
import Input from './input'
import Text from './text'
import Button from './button'
import theme from '../utils/theme'
import { CloseCircle, Search } from './icons'

function SearchBox({onChangeFocus}) {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      onChangeFocus(true)
      setFocus(true)
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      onChangeFocus(false)
      setFocus(false)
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
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
