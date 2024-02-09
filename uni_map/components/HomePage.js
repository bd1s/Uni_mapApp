// components/HomePage.js

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur notre application</Text>
      <Button title="Se connecter" onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomePage;
