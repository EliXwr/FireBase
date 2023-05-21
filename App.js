// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TOS from './authentication_comp/TOS';
import PhoneNumber from './authentication_comp/PhoneNumber';
import Verification from './authentication_comp/Verification'; 
import Profile from './authentication_comp/Profile';
import Inbox from './Inbox';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TOS">
        <Stack.Screen name="TOS" component={TOS} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
       
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
