// // WelcomeScreen.js
// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const WelcomeScreen = ({ navigation }) => {
//   return (
//     <View>
//       {/* Logo animé et message de bienvenue */}
//       <Text>Welcome to MyUni App!</Text>
//       {/* Bouton de connexion */}
//       <Button title="Se connecter" onPress={() => navigation.navigate('Login')} />
//     </View>
//   );
// };

// export default WelcomeScreen;
// WelcomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyUni App!</Text>
      <Button title="Se connecter" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
