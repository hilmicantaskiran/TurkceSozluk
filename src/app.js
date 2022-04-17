import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchView from './views/search';
import DetailView from './views/detail';
import FavoriteView from './views/favorite';
import HistoryView from './views/history';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchView} />
            <Stack.Screen name="Detail" component={DetailView} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{ headerShown: false }}
                initialRouteName="SearchStack"
            >
                <Tab.Screen name="Favorite" component={FavoriteView} />
                <Tab.Screen name="SearchStack" component={SearchStack} />
                <Tab.Screen name="History" component={HistoryView} />
            </Tab.Navigator>
        </NavigationContainer>  
    );
}

export default App;