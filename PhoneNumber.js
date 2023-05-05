import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PhoneNumber({ navigation }) {
  const [countryCode, setCountryCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const confirmNumber = () => {
    // mostrar alerta
    alert(`El número ingresado es +${countryCode} ${phoneNumber}, se le enviará un código de verificación vía msg, para verificar dicho número`);
    navigation.navigate('Verification');
  };

  return (
    <View>
      <Picker
        selectedValue={countryCode}
        onValueChange={(itemValue) => setCountryCode(itemValue)}
      >
        <Picker.Item label="USA (+1)" value="1" />
        <Picker.Item label="Argentina (+54)" value="54" />
        {/* Agrega más códigos de país aquí */}
      </Picker>

      <TextInput
        placeholder="Número de teléfono"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />

<Button title="Confirmar" onPress={confirmNumber} />
    </View>
  );
}

