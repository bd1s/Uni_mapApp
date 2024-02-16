/////Brazar LAST V

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
  Image,
  DrawerLayoutAndroid,
  Button,
  FlatList,
  PermissionsAndroid,
} from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import Searchbar from "./components/InstructionsScreen";
import { db } from "./API";
import { collection, getDocs } from "firebase/firestore";

const facultyCoordinates = {
  latitude: 33.2258,
  longitude: -8.4867,
};

const FACULTY_RADIUS = 100;

export default function API_map() {
  const [mapType, setMapType] = useState("standard");
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [locations, setLocations] = useState([]);
  const blackMarker = require("./assets/marker-black.png");
  const whiteMarker = require("./assets/marker-white.png");
  const drawer = useRef(null);

  useEffect(() => {
    const fetchMarkersData = async () => {
      try {
        const markersCollectionRef = collection(db, "locations");
        const markersSnapshot = await getDocs(markersCollectionRef);
        const markersList = markersSnapshot.docs.map((doc) => doc.data());
        setLocations(markersList);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };
    fetchMarkersData();
  }, []);

  const checkUserLocation = async () => {
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
      try {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        });

        console.log(location);
      } catch (error) {
        Alert.alert(
          "Erreur de récupération de la position",
          "Veillez activer votre localisation"
        );
      }
    } else {
      Alert.alert("Erreur", "La permission de localisation a été refusée");
    }
  };
  locations.sort((a, b) => a.name.localeCompare(b.name));

  const BlocsList = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <TouchableOpacity
        style={styles.closeDrawerButton}
        onPress={() => drawer.current.closeDrawer()}
      >
        <Image
          source={require("./assets/close.png")}
          style={{ width: 16, height: 16 }}
        />
      </TouchableOpacity>

      <FlatList
        data={locations}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        style={{ marginTop: 88, left: 0, right: 0, bottom: 0 }}
      />
    </View>
  );

  const getDestinationCoordinates = () => {
    try {
      const lowerCaseDestination = destination.toLowerCase().trim();

      const destinationLocation = locations.find(
        (loc) =>
          loc.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") ===
          lowerCaseDestination.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      );

      if (destinationLocation) {
        setDestinationCoordinates(destinationLocation.coordinates);
      } else {
        Alert.alert(
          "Destination invalide",
          "Veuillez sélectionner une destination valide parmi les options disponibles."
        );
      }
    } catch (error) {
      console.error("Erreur de géocodage de la destination:", error);
    }
  };

  const handleGetDirections = () => {
    if (destination.trim() === "") {
      Alert.alert("Erreur", "Veuillez saisir une destination valide.");
      return;
    }

    getDestinationCoordinates();
  };

  const toggleMapType = () => {
    setMapType((prevMapType) =>
      prevMapType === "standard" ? "satellite" : "standard"
    );
  };

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={BlocsList}
    >
      <View style={styles.container}>
        <MapView
          minZoomLevel={1}
          maxZoomLevel={20}
          mapType={mapType}
          style={styles.map}
          region={userLocation}
          initialRegion={{
            ...facultyCoordinates,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
          provider={PROVIDER_GOOGLE}
          followsUserLocation={true}
        >
          <Marker
            coordinate={facultyCoordinates}
            title="Faculté des Sciences"
            description="El jadida, Maroc"
            showCallout
          >
            <Text
              style={{
                marginBottom: 10,
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: 12,
                color: "red",
                borderRadius: 8,
              }}
            >
              Fs el jadida
            </Text>
          </Marker>
          {userLocation && (
            <Marker
              coordinate={userLocation}
              icon={mapType === "standard" ? blackMarker : whiteMarker}
              style={styles.markerStyle}
            ></Marker>
          )}
          {destinationCoordinates && (
            <Marker
              coordinate={destinationCoordinates}
              icon={mapType === "standard" ? blackMarker : whiteMarker}
              style={styles.markerStyle}
            />
          )}
          {destinationCoordinates && userLocation && (
            <MapViewDirections
              origin={userLocation}
              destination={destinationCoordinates}
              apikey={"AIzaSyCSyvolGooAFTh7AGtHUXF92MWHoPTrt_4"}
              strokeWidth={4}
              strokeColor="#aac582"
              mode="WALKING"
              onReady={traceRouteOnReady}
            />
          )}

          {destinationCoordinates &&
            userLocation &&
            locations.map((item, index) => {
              //Vérifier si l'emplacement correspond à la destination souhaitée
              if (item.coordinates === destinationCoordinates) {
                return (
                  <Marker
                    key={index}
                    coordinate={item.coordinates}
                    title={item.name}
                    description={item.name}
                  >
                    <Text
                      style={{
                        backgroundColor: "#aac582",
                        color: "white",
                        padding: 9,
                        borderRadius: 8,
                        marginBottom: 62,
                        textAlign: "center",
                      }}
                    >
                      {item.name}
                    </Text>
                  </Marker>
                );
              }
              //Retourner null si l'emplacement ne correspond pas à la destination souhaitée
              return null;
            })}
        </MapView>

        <View style={styles.destinationInputContainer}>
          <TextInput
            style={styles.destinationInput}
            value={destination}
            onChangeText={setDestination}
            placeholder="Votre destination ?"
          />

          <TouchableOpacity
            style={styles.SearchButton}
            onPress={handleGetDirections}
          >
            <Image
              source={require("./assets/search.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={toggleMapType}
          >
            <Image
              source={require("./assets/layer.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={() => drawer.current.openDrawer()}
          >
            <Image
              source={require("./assets/list.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={() => {
              checkUserLocation();
            }}
          >
            <Image
              source={require("./assets/target.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        {distance && duration ? (
          <View style={styles.tripInfoContainer}>
            <Text>Distance: {distance.toFixed(2)} km</Text>
            <Text>Durée estimée: {Math.ceil(duration)} min</Text>
          </View>
        ) : null}
      </View>
    </DrawerLayoutAndroid>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  destinationInputContainer: {
    position: "absolute",
    top: 40,
    right: 16,
    left: 48,
    borderRadius: 8,
    zIndex: 1,
    flexDirection: "column",
    gap: 8,
    alignItems: "flex-end",
  },
  destinationInput: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    height: 44,
  },
  getDirectionsButton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  getDirectionsButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  mapTypeButton: {
    right: 0,
    backgroundColor: "rgba(200, 200, 200, 0.7)",
    padding: 8,
    borderRadius: 50,
    zIndex: 1,
    width: 40,
  },
  SearchButton: {
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(200, 200, 200, 0)",
    padding: 10,
    borderRadius: 50,
    zIndex: 1,
    width: 44,
  },
  mapTypeButtonText: {
    fontWeight: "bold",
    color: "#848c78",
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
  title: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  markerStyle: {
    Color: "#848c78",
    width: 24,
    height: 24,
  },
  navigationContainer: {
    backgroundColor: "white",
  },
  paragraph: {
    padding: 16,
    fontSize: 16,
    textAlign: "center",
  },
  closeDrawerButton: {
    position: "absolute",
    top: 52,
    right: 16,
  },
  item: {
    padding: 16,
    fontSize: 16,
  },
});

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
