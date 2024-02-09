/* import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Vérification de l'authentification (pour simplifier, on suppose que les champs sont valides)
    navigation.navigate('WelcomePage', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Se connecter" onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeader: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginPage;
 */