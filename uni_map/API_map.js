import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const facultyCoordinates = {
  latitude: 33.2258,
  longitude: -8.4867,
};
const locations = [
  {
    name: "Administration",
    coordinates: { latitude: 33.22651, longitude: -8.486939 },
  },
  {
    name: "Bibliothèque",
    coordinates: { latitude: 33.226328, longitude: -8.487133 },
  },
  {
    name: "Parking",
    coordinates: { latitude: 33.226615, longitude: -8.48742 },
  },
  {
    name: "Garage",
    coordinates: { latitude: 33.226872, longitude: -8.486474 },
  },
  {
    name: "Entrée Parking",
    coordinates: { latitude: 33.226872, longitude: -8.486474 },
  },
  {
    name: "Atelier",
    coordinates: { latitude: 33.226542, longitude: -8.486402 },
  },
  {
    name: "Entrée Etudiant",
    coordinates: { latitude: 33.226427, longitude: -8.486117 },
  },
  {
    name: "Entrée Principale",
    coordinates: { latitude: 33.226161, longitude: -8.485992 },
  },
  {
    name: "Amphé 1 Al Farabi",
    coordinates: { latitude: 33.226165, longitude: -8.48664 },
  },
  {
    name: "Amphé 2 Al Bayrouni",
    coordinates: { latitude: 33.22585, longitude: -8.4871 },
  },
  {
    name: "Amphé 3 Ibno Haitam",
    coordinates: { latitude: 33.225521, longitude: -8.487151 },
  },
  {
    name: "Cafétéria des enseignants",
    coordinates: { latitude: 33.226219, longitude: -8.48753 },
  },
  {
    name: "Amphi Ibno Nafiss",
    coordinates: { latitude: 33.225703, longitude: -8.485969 },
  },
  {
    name: "Affichage",
    coordinates: { latitude: 33.225655, longitude: -8.485769 },
  },
  { name: "Bloc B", coordinates: { latitude: 33.225345, longitude: -8.48567 } },
  { name: "Bloc A", coordinates: { latitude: 33.22539, longitude: -8.485967 } },
  {
    name: "Bloc C",
    coordinates: { latitude: 33.226161, longitude: -8.488013 },
  },
  { name: "Bloc D", coordinates: { latitude: 33.22583, longitude: -8.488338 } },
  {
    name: "Toilette",
    coordinates: { latitude: 33.22517, longitude: -8.48556 },
  },
  {
    name: "Cafétéria des Etudiants",
    coordinates: { latitude: 33.22506, longitude: -8.48575 },
  },
  {
    name: "Amphi Ibn Younes",
    coordinates: { latitude: 33.22508, longitude: -8.48611 },
  },
  {
    name: "Département de biologie",
    coordinates: { latitude: 33.22478, longitude: -8.48592 },
  },
  {
    name: "Département de chimie",
    coordinates: { latitude: 33.22442, longitude: -8.48592 },
  },
  {
    name: "Animalerie",
    coordinates: { latitude: 33.224507, longitude: -8.486489 },
  },
  {
    name: "Toilette",
    coordinates: { latitude: 33.22478, longitude: -8.48725 },
  },
  {
    name: "Département de Physique / Géologie",
    coordinates: { latitude: 33.22575, longitude: -8.48778 },
  },
  {
    name: "Département de Mathématique",
    coordinates: { latitude: 33.22522, longitude: -8.48817 },
  },
  {
    name: "Département de Géologie",
    coordinates: { latitude: 33.22528, longitude: -8.48772 },
  },
  {
    name: "Département Informatique",
    coordinates: { latitude: 33.22489, longitude: -8.48764 },
  },
  {
    name: "Bibliothèque",
    coordinates: { latitude: 33.225, longitude: -8.48844 },
  },
];

const FACULTY_RADIUS = 100; // Vous pouvez ajuster cette valeur selon votre besoin

export default function API_map() {
  const [mapType, setMapType] = useState("standard");
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState('');
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapViewRef = useRef(null);

  
  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords);
      } catch (error) {
        console.error('Erreur de récupération de la position:', error);
      }
    };

    const interval = setInterval(() => {
      checkUserLocation();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getDestinationCoordinates = async () => {
    try {
      const destinationLocation = locations.find(loc => loc.name === destination);
      if (destinationLocation) {
        setDestinationCoordinates(destinationLocation.coordinates);
      } else {
        Alert.alert('Destination invalide', 'Veuillez sélectionner une destination valide parmi les options disponibles.');
      }
    } catch (error) {
      console.error('Erreur de géocodage de la destination:', error);
    }
  };

  const handleGetDirections = () => {
    if (destination.trim() === '') {
      Alert.alert('Erreur', 'Veuillez saisir une destination valide.');
      return;
    }

    getDestinationCoordinates();
  };

  const toggleMapType = () => {
    setMapType((prevMapType) =>
      prevMapType === "standard" ? "satellite" : "standard"
    );
  };

  const [tripInfo, setTripInfo] = useState(null);

  const traceRouteOnReady = (args: any) => {
    if (args) {
      // args.distance
      // args.duration
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };


  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        minZoomLevel={17}
        maxZoomLevel={20}
        mapType={mapType}
        style={styles.map}
        initialRegion={{
          ...facultyCoordinates,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
  coordinate={facultyCoordinates}
  title="Faculté des Sciences"
  description="El jadida, Maroc"
  showCallout
>
  {/* Contenu du callout */}
  <Callout>
    <Text>Faculté des Sciences</Text>
  </Callout>
</Marker>


        {locations.map((item, index) => (
          <Marker key={index} coordinate={item.coordinates} title={item.name} description={item.name} showCallout pinColor="black">
            <Callout>
              <Text>{item.name}</Text>
            </Callout>
            
          </Marker>
        ))}

        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Votre position"
            pinColor="blue"
          />
        )}

        {destinationCoordinates && userLocation && (
          <MapViewDirections
            origin={userLocation}
            destination={destinationCoordinates}
            apikey={'AIzaSyCSyvolGooAFTh7AGtHUXF92MWHoPTrt_4'}
            strokeWidth={4}
            strokeColor="hotpink"
            mode="WALKING"
            onReady={traceRouteOnReady}
            // onReady={(result) => {
            //   console.log('Informations sur le trajet:', result);
            //   setTripInfo(result);
            // }}
          />
        )}
      </MapView>

      <TextInput
        style={styles.destinationInput}
        value={destination}
        onChangeText={setDestination}
        placeholder="Entrez votre destination"
      />

      <TouchableOpacity style={styles.getDirectionsButton} onPress={handleGetDirections}>
        <Text style={styles.getDirectionsButtonText}>Obtenir des directions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
        <Text style={styles.mapTypeButtonText}>
          {mapType === "standard"
            ? "Passer à Satellite"
            : "Passer à Par défaut"}
        </Text>
      </TouchableOpacity>
      {distance && duration ? (
          <View style={styles.tripInfoContainer}>
            <Text>Distance: {distance.toFixed(2)} km</Text>
            <Text>Durée estimée: {Math.ceil(duration)} min</Text>
          </View>
        ) : null}
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  destinationInput: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  getDirectionsButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  getDirectionsButtonText: {
    fontWeight: "bold",
  },
  mapTypeButton: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  mapTypeButtonText: {
    fontWeight: "bold",
  },
  tripInfoContainer: {
    position: "absolute",
    bottom: 100,
    left: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
  },
});
