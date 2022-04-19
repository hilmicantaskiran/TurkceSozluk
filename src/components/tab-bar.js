import React from 'react'
import { Keyboard } from 'react-native'

import theme from '../utils/theme'

import Box from '../components/box'
import Button from '../components/button'
import { Search, Bookmark, History } from '../components/icons'

function BottomTabBar({ state, descriptors, navigation }) {
  return (
    <Box 
      flexDirection="row" 
      bg="white"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` opti on makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        return label === 'SearchStack' ? (
          <Box
            key={label} 
            p={15} 
            mt={-15} 
            bg="white"
            borderRadius="full"
          >
            <Button
              size={56}
              bg="red"
              borderRadius="full"
              onPress={onPress}
            >
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flex={1}
            flexDirection="column"
            height={56}
            pt={6}
            onPress={onPress}
          >
            {label === 'Favorite' && (
              <Bookmark 
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'History' && (
              <History 
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}

            {/* indicator */}
            <Box
              size={3}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius="full"
            />
          </Button>
        )
      })}
    </Box>
  )
}

export default BottomTabBar
