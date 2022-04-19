import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from './utils/theme'
import TabNavigator from './navigation'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <TabNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
