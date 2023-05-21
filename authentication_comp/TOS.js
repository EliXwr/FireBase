import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

export default function TOS({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Terms and Conditions...</Text>
      <Button title="Accept" onPress={() => navigation.navigate('PhoneNumber')} />
    </View>
  );
}
