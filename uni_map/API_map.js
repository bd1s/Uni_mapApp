import React, { useState } from "react";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

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

export default function API_map() {
  const [mapType, setMapType] = useState("standard");

  const toggleMapType = () => {
    setMapType((prevMapType) =>
      prevMapType === "standard" ? "satellite" : "standard"
    );
  };

  return (
    <View style={styles.container}>
      <MapView
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
        showsUserLocation={false}
        showsMyLocationButton={false}
        followsUserLocation={false}
      >
        {/* Marqueur pour la faculté */}
        <Marker
          coordinate={facultyCoordinates}
          title="Faculté des Sciences et Techniques"
          description="Settat, Maroc"
        >
          <Callout>
            <Text>Faculté des Sciences et Techniques</Text>
          </Callout>
        </Marker>

        {/* Marqueurs pour les autres emplacements */}
        {locations.map((item, index) => (
          <Marker key={index} coordinate={item.coordinates} title={item.name}>
            <Callout>
              <Text>{item.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
        <Text style={styles.mapTypeButtonText}>
          {mapType === "standard"
            ? "Passer à Satellite"
            : "Passer à Par défaut"}
        </Text>
      </TouchableOpacity>
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
  mapTypeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
  },
  mapTypeButtonText: {
    fontWeight: "bold",
  },
});
