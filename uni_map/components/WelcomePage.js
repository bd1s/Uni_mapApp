// components/WelcomePage.js

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const WelcomePage = ({ username, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue, {username} !</Text>
      <Button title="Se déconnecter" onPress={onLogout} />
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

export default WelcomePage;
