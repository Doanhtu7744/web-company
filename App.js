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


// Add illustrations to the News section of Home and SubsidiaryScreen (3 news items on these 2 screens will be the first 3 news items in the News page). When clicking on any news image in those news items, it will lead to that news item on the News page. When clicking on any news item on the News page, it will lead to the Detailednews page (keep it as it is currently - clicking on any news image will switch to the detail page of that page) of that news item