import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { ForgotPassword } from './screens/ForgotPassword';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
        }}
        initialRouteName="SignIn"
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  );
}
