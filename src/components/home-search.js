import React from 'react'
import { Animated, LogBox } from 'react-native'

import Box from './box'
import Search from './search'
import Background from './bg'

import { TdkLogo } from './icons'

import theme from '../utils/theme'

const HERO_HEIGHT = 230

function HomeSearch({
  navigation,
  isSearchFocus,
  onSearchFocus,
  onSubmitEditing
}) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))

  React.useEffect(() => {
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver`'
    ]) /* ignore Animated useNativeDriver warning to avoid log spam */
    if (isSearchFocus) {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230
      }).start()
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 230
      }).start()
    } else {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230
      }).start()
      // hero-height
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 230
      }).start()
    }
  }, [heroHeight, bgOpacity, isSearchFocus])

  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      <Box as={Animated.View} style={{ opacity: bgOpacity }}>
        <Background>
          <Box flex={1} justifyContent="center" alignItems="center">
            <TdkLogo color={theme.colors.white} />
          </Box>
        </Background>
      </Box>
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={isSearchFocus ? 0 : -42}
        width="100%"
        p={16}
      >
        <Search
          navigation={navigation}
          onSubmitEditing={onSubmitEditing}
          onChangeFocus={(status) => onSearchFocus(status)}
        />
      </Box>
    </Box>
  )
}

export default HomeSearch
