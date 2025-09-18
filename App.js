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


//thêm ảnh minh hoạ vào phần News của màn Home với màn SubsidiaryScreen (3 tin tức ở 2 màn này sẽ là 3 tin tức đầu tiên trong trang News) cho tôi khi bấm vào ảnh của tin tức nào trong các tin tức đó sẽ dẫn đến tin tức đó ở trang News. Khi bấm vào tin tức nào ở trang News thì sẽ dẫn đến trang Detailednews(giữ nguyên như hiện tại là bấm vào hình tin tức nào thì sẽ chuyển đến trang chi tiết của trang đó) của tin tức đó 