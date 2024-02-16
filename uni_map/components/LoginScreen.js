// import React, { useState } from "react";
// import { View, Text, TextInput, Button, Pressable, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../API";

// const LoginScreen = ({ setIsAuth }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation(); // Initialiser la navigation

//   const handleLogin = async () => {
//     try {
//       // Utiliser la méthode signInWithEmailAndPassword pour authentifier l'utilisateur
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       setIsAuth(true);
//       navigation.navigate("Home"); // Correction de la navigation vers 'Mapconfig'
//     } catch (error) {
//       console.log(error.code);
//       if (email === "" || password === "") {
//         Alert.alert("Erreur", "Veuillez remplir tous les champs");
//       } else if (error.code === "auth/invalid-email") {
//         Alert.alert("Erreur", "Adresse email invalide");
//       } else if (error.code === "auth/user-not-found") {
//         Alert.alert("Erreur", "Utilisateur non trouvé");
//       } else if (error.code === "auth/wrong-password") {
//         Alert.alert("Erreur", "Mot de passe incorrect");
//       } else if (error.code === "auth/too-many-requests") {
//         Alert.alert(
//           "Erreur",
//           "Trop de tentatives. Veuillez réessayer plus tard"
//         );
//       } else if (error.code === "auth/invalid-credential") {
//         Alert.alert("Erreur", "Informations d'identification non valides");
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.loginPage}>
//         <Text>Connectez-vous</Text>

//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           <Pressable onPress={handleLogin} style={styles.authButtons}>
//             <Text style={styles.text}>Se connecter</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loginPage: {
//     width: "90%",
//     alignItems: "center",
//   },
//   formContainer: {
//     width: "100%",
//     marginTop: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   error: {
//     color: "red",
//     marginTop: 10,
//   },
//   authButtons: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     backgroundColor: "#a8cf45",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//   },
// };

// export default LoginScreen;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../API";

const LoginScreen = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsAuth(true);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.code);
      if (email === "" || password === "") {
        Alert.alert("Erreur", "Veuillez remplir tous les champs");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Erreur", "Adresse email invalide");
      } else if (error.code === "auth/user-not-found") {
        Alert.alert("Erreur", "Utilisateur non trouvé");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Erreur", "Mot de passe incorrect");
      } else if (error.code === "auth/too-many-requests") {
        Alert.alert(
          "Erreur",
          "Trop de tentatives. Veuillez réessayer plus tard"
        );
      } else if (error.code === "auth/invalid-credential") {
        Alert.alert("Erreur", "Informations d'identification non valides");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginPage}>
        <Text style={styles.title}>Connectez-vous</Text>
        {/* <Text style={styles.note}>
          Veuillez entrer l'email et le mot de passe que nous vous avons envoyés par email.
        </Text> */}

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.authButton}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
          <Text style={styles.note}>
          Nb: Si vous êtes invité, veuillez entrer l'e-mail et le mot de passe qui vous ont été envoyés par e-mail
          </Text>
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
    backgroundColor: "#fff",
  },
  loginPage: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingBottom: 13, // Ajout d'un peu d'espace en bas du titre
  },
  note: {
    fontSize: 14,
    marginTop: 20, // Ajout de marge supérieure
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: "100%",
  },
  authButton: {
    backgroundColor: "#aac582",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default LoginScreen;
