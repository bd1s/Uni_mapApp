import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../API";

const SignUpScreen = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigation(); // Initialiser la navigation

  const handleSignUp = async () => {
    try {
      // Utiliser la méthode signInWithEmailAndPassword pour authentifier l'utilisateur
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsAuth(true);
      navigation.navigate("Home"); // Correction de la navigation vers 'Mapconfig'
    } catch (error) {
      setError(error.code);
      console.log(error.code);
    }

    if (error === "" || password === "") {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
    } else if (error === "auth/invalid-email") {
      Alert.alert("Erreur", "Adresse email invalide");
    } else if (error === "auth/invalid-password") {
      Alert.alert("Erreur", "Mot de passe invalide: 6 caractères minimum");
    } else if (error === "auth/email-already-exists") {
      Alert.alert("Erreur", "Cet email est déjà utilisé");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginPage}>
        <Text>Inscrivez vous</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable onPress={handleSignUp} style={styles.authButtons}>
            <Text style={styles.text}>S'inscrire</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginPage: {
    width: "90%",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
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
};

export default SignUpScreen;
