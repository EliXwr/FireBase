import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import styles from '../styles/styles';

export default function Profile({ navigation }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileSetup = () => {
    // guardar la información en Firebase
    navigation.navigate('Inbox');
  };

  return (
    <View style={styles.container}>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={{ width: 100, height: 100 }} />
      ) : (
        <Button title="Seleccionar imagen" onPress={() => {}} />
      )}

      <TextInput
        placeholder="Nombre"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Apellido (opcional)"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />

      <Button title="Continuar" onPress={handleProfileSetup} />
    </View>
  );
}