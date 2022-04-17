import React from 'react'
import theme from '../utils/theme'
import Box from '../components/box'
import Button from '../components/button'
import { Search, Bookmark, RotateCcw } from '../components/icons'

function BottomTabBar({ state, descriptors, navigation }) {
  return (
    <Box flexDirection="row" bg="white">
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
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        return label === 'SearchStack' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
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
            {label === 'Favorite' && <Bookmark stroke={theme.colors.textLight} />}
            {label === 'History' && <RotateCcw stroke={theme.colors.textLight} />}
            <Box
              size={3}
              bg={isFocused ? 'red' : 'white    '}
              mt={6}
              rounded="full"
            />
          </Button>
        )
      })}
    </Box>
  )
}

export default BottomTabBar
