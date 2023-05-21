import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/styles';

export default function PhoneNumber({ navigation }) {
  const [countryCode, setCountryCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const confirmNumber = () => {
    // mostrar alerta
    alert(`El número ingresado es +${countryCode} ${phoneNumber}, se le enviará un código de verificación vía msg, para verificar dicho número`);
    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        selectedValue={countryCode}
        onValueChange={(itemValue) => setCountryCode(itemValue)}
      >
        <Picker.Item label="USA (+1)" value="1" />
        <Picker.Item label="Argentina (+54)" value="54" />
        {/* Agrega más códigos de país aquí */}
      </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        placeholderTextColor="#657786" // color de placeholder más sutil
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      </View>
      

      <Button title="Confirmar" onPress={confirmNumber} />
    </View>
  );
}

