import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScrollbarStyles from './components/ScrollbarStyles';
import HomeScreen from './screens/HomeScreen';
import SubsidiaryScreen from './screens/SubsidiaryScreen';
import BranchsScreen from './screens/Branchs';
import NewsScreen from './screens/News';
import DetailedNewsScreen from './screens/Detailednews';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <ScrollbarStyles />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Subsidiary" component={SubsidiaryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Branches" component={BranchsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="News" component={NewsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailedNews" component={DetailedNewsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}