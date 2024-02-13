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
import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyUni App!</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.authButtons}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text}>Se connecter</Text>
        </Pressable>
        <Pressable
          style={styles.authButtons}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>S'inscrire</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  authButtons: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default WelcomeScreen;
