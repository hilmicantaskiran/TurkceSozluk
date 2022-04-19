import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchView from './views/search'
import DetailView from './views/detail'
import FavoriteView from './views/favorite'
import HistoryView from './views/history'

import Button from './components/button'
import BottomTabBar from './components/tab-bar'

import { Left, More } from './components/icons'

import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailView}
        options={({ route, navigation }) => ({
          title: (route.params && route.params.title) || 'boş',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.softRed,
          },
          headerTitleStyle: {
            color: theme.colors.textMedium,
            textAliign: 'center',
          },
          headerLeft: () => (
            <Button pr={20} height='100%' onPress={() => navigation.navigate('Search')}>
              <Left color={theme.colors.textMedium} />
            </Button>
          ),
          headerRight: () => (
            <Button pl={20} height='100%' onPress={() => navigation.navigate('Search')}>
              <More color={theme.colors.textMedium} />
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
