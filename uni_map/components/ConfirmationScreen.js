// import { Image } from "react-native";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";

// const InstructionsScreen = (props) => {
//   return (
//     <ScrollView style={styles.scrollView}>
//       <Text style={styles.text}>
//         Bienvenue à la Faculté des Sciences d'El Jadida ! Alors que vous vous
//         lancez dans votre parcours académique avec nous, voici quelques
//         instructions importantes pour vous aider à naviguer dans vos premiers
//         pas :
//       </Text>
//       <Text style={styles.section}>1. Processus d'Inscription: </Text>
//       <Text style={styles.text}>
//         - Assurez-vous de compléter le processus d'inscription conformément aux
//         directives fournies par l'administration universitaire.
//       </Text>
//       <Text style={styles.text}>
//         - Familiarisez-vous avec les dates limites d'inscription, les documents
//         requis et les instructions spécifiques liées à votre programme d'études.
//       </Text>
//       <Text style={styles.section}>2. Séance d'Orientation :</Text>
//       <Text style={styles.text}>
//         - Assistez à la séance d'orientation organisée par la faculté pour vous
//         familiariser avec les installations du campus, les ressources
//         académiques et les services de soutien disponibles pour vous.
//       </Text>
//       <Text style={styles.text}>
//         - Prenez note des informations importantes concernant les horaires des
//         cours, les politiques académiques et les activités parascolaires.
//       </Text>
//       <Text style={styles.section}>3. Ressources Académiques :</Text>
//       <Text style={styles.text}>
//         - Utilisez la bibliothèque, les laboratoires et autres ressources
//         académiques offertes par la faculté pour enrichir votre expérience
//         d'apprentissage.
//       </Text>
//       <Text style={styles.text}>
//         - Explorez les plateformes en ligne et les bases de données pour accéder
//         aux documents de cours, aux articles de recherche et aux ressources
//         d'étude supplémentaires.
//       </Text>
//       <Text style={styles.section}>4. Services de Soutien aux Étudiants :</Text>
//       <Text style={styles.text}>
//         - Familiarisez-vous avec les services de soutien aux étudiants
//         disponibles sur le campus, notamment le conseil, le tutorat et
//         l'orientation professionnelle.
//       </Text>
//       <Text style={styles.text}>
//         - Contactez l'administration de la faculté ou le bureau des affaires
//         étudiantes pour obtenir de l'aide en cas de difficultés académiques ou
//         personnelles.
//       </Text>
//       <Text style={styles.section}>5. Opportunités d'Engagement :</Text>
//       <Text style={styles.text}>
//         - Impliquez-vous dans des clubs d'étudiants, des associations et des
//         activités parascolaires pour enrichir votre expérience universitaire et
//         établir des liens significatifs avec vos pairs.
//       </Text>
//       <Text style={styles.text}>
//         - Restez à l'affût des événements à venir, des ateliers et des
//         séminaires organisés par la faculté et la communauté universitaire.
//       </Text>
//       <Text style={styles.section}>6. Canaux de Communication :</Text>
//       <Text style={styles.text}>
//         - Restez informé des annonces importantes, des dates limites et des
//         mises à jour académiques via les canaux de communication officiels tels
//         que l'e-mail, les portails étudiants et les panneaux d'affichage.
//       </Text>
//       <Text style={styles.text}>
//         - Assurez-vous que vos coordonnées sont à jour pour recevoir des
//         notifications en temps opportun de la part de l'administration de la
//         faculté et de l'université.
//       </Text>
//       <Text style={styles.section}>7. Respect de l'Intégrité Académique :</Text>
//       <Text style={styles.text}>
//         - Respectez les principes de l'intégrité académique et de la conduite
//         éthique dans toutes vos entreprises académiques.
//       </Text>
//       <Text style={styles.text}>
//         - Familiarisez-vous avec les politiques de l'université en matière de
//         plagiat, de tricherie et de comportement académique répréhensible, et
//         efforcez-vous de maintenir les plus hautes normes d'honnêteté et
//         d'intégrité dans vos études.
//       </Text>
//       <Text style={styles.section}>8. Restez Connecté :</Text>
//       <Text style={styles.text}>
//         - Restez en contact avec vos camarades de classe, vos professeurs et le
//         personnel de la faculté pour construire une communauté académique
//         solidaire.
//       </Text>
//       <Text style={styles.text}>
//         - Profitez des heures de bureau et des canaux de communication virtuels
//         pour demander des conseils, des clarifications et des retours sur votre
//         progression académique.
//       </Text>
//       <Text style={styles.footerText}>
//         Bienvenue une fois de plus, et nous vous souhaitons un parcours
//         académique réussi et enrichissant à la Faculté des Sciences d'El Jadida
//         ! Si vous avez des questions ou avez besoin d'une assistance
//         supplémentaire, n'hésitez pas à nous contacter.
//       </Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   destinationInputContainer: {
//     position: "absolute",
//     top: 34,
//     right: 8,
//     left: 48,
//     borderRadius: 8,
//     zIndex: 1,
//     gap: 8,
//     alignItems: "flex-end",
//   },
//   destinationInput: {
//     backgroundColor: "rgba(255, 255, 255, 1)",
//     padding: 12,
//     borderRadius: 8,
//     width: "100%",
//   },
//   getDirectionsButton: {
//     backgroundColor: "black",
//     padding: 12,
//     borderRadius: 8,
//     width: "100%",
//     alignItems: "center",
//   },
//   getDirectionsButtonText: {
//     fontWeight: "bold",
//     color: "white",
//   },
//   mapTypeButton: {
//     position: "absolute",
//     right: 0,
//     backgroundColor: "rgba(200, 200, 200, 0)",
//     padding: 12,
//     borderRadius: 50,
//     zIndex: 1,
//     width: 48,
//   },
//   image: {
//     width: "100%",
//     margin: 0,
//     top: 0,
//     resizeMode: "cover",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     margin: 0,
//     top: 0,
//     flexDirection: "column",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: 60,
//     backgroundColor: "#848c78",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   navText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   scrollView: {
//     backgroundColor: "white",
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   section: {
//     marginTop: 16,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   text: {
//     fontSize: 16,
//     textAlign: "justify",
//   },
//   footerText: {
//     marginVertical: 16,
//     fontSize: 16,
//     textAlign: "justify",
//   },
// });

// export default InstructionsScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from "../API";
import { addDoc, collection } from "firebase/firestore";

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [eventName, setEventName] = useState('');

  const handleRegistration = async () => {
    try {
      if (firstName && lastName && email && eventName) {
        // Vérification de l'email valide
        if (!validateEmail(email)) {
          alert("Veuillez saisir une adresse email valide !");
          return;
        }
        
        const eventsCollectionRef = collection(db, 'events');
        await addDoc(eventsCollectionRef, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          eventName: eventName
        });
        // Réinitialisation des champs du formulaire après l'inscription réussie
        setFirstName('');
        setLastName('');
        setEmail('');
        setEventName('');
        alert('Inscription réussie !');
      } else {
        alert('Veuillez remplir tous les champs !');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  // Fonction pour valider l'email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginPage}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nom de famille"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Adresse email"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nom de l'événement"
              value={eventName}
              onChangeText={text => setEventName(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.authButton, { backgroundColor: '#aac582' }]}
          onPress={handleRegistration}
        >
          <Text style={styles.buttonText}>Confirmer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginPage: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
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
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 13,
  },
  note: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
  authButton: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;


