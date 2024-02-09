/* import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomePage = ({ route, navigation }) => {
  const { username } = route.params;

  const handleLogout = () => {
    navigation.navigate('HomePage');
  };

  const handleMapNavigation = () => {
    navigation.navigate('API_map');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenue, {username} !</Text>
      <Button title="Se déconnecter" onPress={handleLogout} />
      <Button title="Voir la carte" onPress={handleMapNavigation} />
    </View>
  );
};

export default WelcomePage;
 */