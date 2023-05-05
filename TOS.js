// TOS.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TOS({ navigation }) {
  return (
    <View>
      <Text>Terms and Conditions...</Text>
      <Button title="Accept" onPress={() => navigation.navigate('PhoneNumber')} />
    </View>
  );
}
