import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { ForgotPassword } from './screens/ForgotPassword';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
