/* // App.js

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <WelcomePage username={username} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </View>
  );
};
export default App;
const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
 */

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import WelcomePage from './components/WelcomePage';
// import API_map from './API_map';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="HomePage" component={HomePage} />
//         <Stack.Screen name="LoginPage" component={LoginPage} />
//         <Stack.Screen
//           name="WelcomePage"
//           component={WelcomePage}
//           initialParams={{ username: 'Utilisateur' }}
//         />
//         <Stack.Screen name="API_map" component={API_map} /> {/* Ajout de la page contenant la carte */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

/* import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import API_map from './API_map';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen 
          name="WelcomePage" 
          component={WelcomePage} 
          initialParams={{ username: 'Utilisateur' }}
        />
        <Stack.Screen name="API_map" component={API_map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 */
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import API_map from './API_map';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Uni map" component={API_map} />
//         {/* Ajoutez d'autres écrans au besoin */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// import React, { useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import WelcomeScreen from "./components/WelcomeScreen";
// import LoginScreen from "./components/LoginScreen";
// import SignUpScreen from "./components/SignUpScreen";
// import HomeScreen from "./components/HomeScreen";
// import API_map from "./API_map";
// import { useState } from "react";
// import { PermissionsAndroid } from "react-native";

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       try {
//         const granted = await PermissionsAndroid.requestMultiple(
//           [
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//           ],
//           {
//             title: "Permission d'accès à la localisation",
//             message:
//               "L'application a besoin de votre permission pour accéder à votre localisation.",
//             buttonNeutral: "Demander plus tard",
//             buttonNegative: "Annuler",
//             buttonPositive: "OK",
//           }
//         );
//         console.log(granted);
//         console.log(PermissionsAndroid.RESULTS.GRANTED);
//         if (
//           granted["android.permission.ACCESS_FINE_LOCATION"] === "granted" &&
//           granted["android.permission.ACCESS_COARSE_LOCATION"] === "granted"
//         ) {
//           console.log("Vous pouvez utiliser la localisation");
//         } else {
//           console.log("La permission de localisation a été refusée");
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     };

//     requestLocationPermission();
//   });

// //   return (
    
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Welcome">
// //         <Stack.Screen name="Welcome" component={WelcomeScreen} />
        
// //         <Stack.Screen name="Login">
// //           {(props) => <LoginScreen {...props} setIsAuth={setIsLoggedIn} />}
// //         </Stack.Screen>
// //         <Stack.Screen name="Register">
// //           {(props) => <SignUpScreen {...props} setIsAuth={setIsLoggedIn} />}
// //         </Stack.Screen>

// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="Map" component={API_map} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };
// return (
//   <NavigationContainer>
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isAuth ? (
//         <Stack.Screen name="Welcome">
//           {() => <WelcomeScreen onAnimationComplete={() => setIsAuth(true)} />}
//         </Stack.Screen>
//       ) : (
//         <>
//         <Stack.Screen name="Login">
//           {(props) => <LoginScreen {...props} setIsAuth={setIsLoggedIn} />}
//         </Stack.Screen> 
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Map" component={API_map} />        
//         </>
//       )}
//     </Stack.Navigator>
//   </NavigationContainer>
// );
// };

// export default App;

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import HomeScreen from "./components/HomeScreen";
import API_map from "./API_map";
import { useState } from "react";
import { PermissionsAndroid } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.requestMultiple(
          [
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ],
          {
            title: "Permission d'accès à la localisation",
            message:
              "L'application a besoin de votre permission pour accéder à votre localisation.",
            buttonNeutral: "Demander plus tard",
            buttonNegative: "Annuler",
            buttonPositive: "OK",
          }
        );
        console.log(granted);
        console.log(PermissionsAndroid.RESULTS.GRANTED);
        if (
          granted["android.permission.ACCESS_FINE_LOCATION"] === "granted" &&
          granted["android.permission.ACCESS_COARSE_LOCATION"] === "granted"
        ) {
          console.log("Vous pouvez utiliser la localisation");
        } else {
          console.log("La permission de localisation a été refusée");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Welcome">
            {() => <WelcomeScreen onAnimationComplete={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} setIsAuth={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={API_map} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// 