// // // WelcomeScreen.js
// // import React from 'react';
// // import { View, Text, Button } from 'react-native';

// // const WelcomeScreen = ({ navigation }) => {
// //   return (
// //     <View>
// //       {/* Logo animé et message de bienvenue */}
// //       <Text>Welcome to MyUni App!</Text>
// //       {/* Bouton de connexion */}
// //       <Button title="Se connecter" onPress={() => navigation.navigate('Login')} />
// //     </View>
// //   );
// // };

// // export default WelcomeScreen;
// // WelcomeScreen.js
// import React from "react";
// import { View, Text, Button, StyleSheet, Pressable } from "react-native";

// const WelcomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to MyUni App!</Text>
//       <View style={styles.buttonsContainer}>
//         <Pressable
//           style={styles.authButtons}
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text style={styles.text}>Se connecter</Text>
//         </Pressable>
      
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     width: "100%",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//   },
//   authButtons: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     backgroundColor: "black",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//   },
// });

// export default WelcomeScreen;

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
const logo = require("../assets/pinlogo2.png");


const WelcomeScreen = ({  onAnimationComplete }) => {
  const [fadeAnim] = useState(new Animated.Value(1));
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const hideWelcomePage = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setShowPage(false);
        if (typeof onAnimationComplete === 'function') {
          onAnimationComplete();
        }
      });
    };

    hideWelcomePage();
  }, [fadeAnim, onAnimationComplete]);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      {showPage && (
        <View style={styles.innerContainer}>
          <Image source={logo} />
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 450,
    height: 450,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
