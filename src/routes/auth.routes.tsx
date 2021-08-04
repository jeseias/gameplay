import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/home';
import { SignIn } from '../screens/sign-in';
import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../screens/appointment-details';
import { AppointmentCreate } from '../screens/appointment-create';

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  );
}