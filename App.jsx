import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import MemoList from './src/screens/MemoList';
import MemoDetail from './src/screens/MemoDetail';
import MemoCreate from './src/screens/MemoCreate';
import MemoEdit from './src/screens/MemoEdit';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#A9CCE3' },
          headerTitleStyle: { color: 'white' },
          headerTitle: 'Memo',
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoList" component={MemoList} />
        <Stack.Screen name="MemoDetail" component={MemoDetail} />
        <Stack.Screen name="MemoCreate" component={MemoCreate} />
        <Stack.Screen name="MemoEdit" component={MemoEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
