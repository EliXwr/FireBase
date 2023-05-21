import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

export default function Verification({ navigation }) {
  const [verificationCode, setVerificationCode] = useState('');

  const confirmCode = () => {
    // verificar el código
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código de verificación"
        onChangeText={(text) => setVerificationCode(text)}
        value={verificationCode}
      />

      <Button title="Confirmar" onPress={confirmCode} />
    </View>
  );
}
