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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import API_map from './API_map';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EcranCarte" component={API_map} />
        {/* Ajoutez d'autres écrans au besoin */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}