import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchView from './views/search'
import DetailView from './views/detail'
import FavoriteView from './views/favorite'
import HistoryView from './views/history'

import Box from './components/box'
import BottomTabBar from './components/tab-bar'

import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Search" component={SearchView} />
      <Stack.Screen name="Detail" component={DetailView} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SearchStack"
            tabBar={(props) => <BottomTabBar {...props} />}
          >
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="SearchStack" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  )
}

export default App
