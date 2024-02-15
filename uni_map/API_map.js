// // import React, { useState, useEffect, useRef } from "react";
// // import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from "react-native";
// // import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
// // import * as Location from 'expo-location';
// // import MapViewDirections from 'react-native-maps-directions';

// // const facultyCoordinates = {
// //   latitude: 33.2258,
// //   longitude: -8.4867,
// // };
// // const locations = [
// //   {
// //     name: "Administration",
// //     coordinates: { latitude: 33.22651, longitude: -8.486939 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.226328, longitude: -8.487133 },
// //   },
// //   {
// //     name: "Parking",
// //     coordinates: { latitude: 33.226615, longitude: -8.48742 },
// //   },
// //   {
// //     name: "Garage",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Entrée Parking",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Atelier",
// //     coordinates: { latitude: 33.226542, longitude: -8.486402 },
// //   },
// //   {
// //     name: "Entrée Etudiant",
// //     coordinates: { latitude: 33.226427, longitude: -8.486117 },
// //   },
// //   {
// //     name: "Entrée Principale",
// //     coordinates: { latitude: 33.226161, longitude: -8.485992 },
// //   },
// //   {
// //     name: "Amphé 1 Al Farabi",
// //     coordinates: { latitude: 33.226165, longitude: -8.48664 },
// //   },
// //   {
// //     name: "Amphé 2 Al Bayrouni",
// //     coordinates: { latitude: 33.22585, longitude: -8.4871 },
// //   },
// //   {
// //     name: "Amphé 3 Ibno Haitam",
// //     coordinates: { latitude: 33.225521, longitude: -8.487151 },
// //   },
// //   {
// //     name: "Cafétéria des enseignants",
// //     coordinates: { latitude: 33.226219, longitude: -8.48753 },
// //   },
// //   {
// //     name: "Amphi Ibno Nafiss",
// //     coordinates: { latitude: 33.225703, longitude: -8.485969 },
// //   },
// //   {
// //     name: "Affichage",
// //     coordinates: { latitude: 33.225655, longitude: -8.485769 },
// //   },
// //   { name: "Bloc B", coordinates: { latitude: 33.225345, longitude: -8.48567 } },
// //   { name: "Bloc A", coordinates: { latitude: 33.22539, longitude: -8.485967 } },
// //   {
// //     name: "Bloc C",
// //     coordinates: { latitude: 33.226161, longitude: -8.488013 },
// //   },
// //   { name: "Bloc D", coordinates: { latitude: 33.22583, longitude: -8.488338 } },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22517, longitude: -8.48556 },
// //   },
// //   {
// //     name: "Cafétéria des Etudiants",
// //     coordinates: { latitude: 33.22506, longitude: -8.48575 },
// //   },
// //   {
// //     name: "Amphi Ibn Younes",
// //     coordinates: { latitude: 33.22508, longitude: -8.48611 },
// //   },
// //   {
// //     name: "Département de biologie",
// //     coordinates: { latitude: 33.22478, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Département de chimie",
// //     coordinates: { latitude: 33.22442, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Animalerie",
// //     coordinates: { latitude: 33.224507, longitude: -8.486489 },
// //   },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22478, longitude: -8.48725 },
// //   },
// //   {
// //     name: "Département de Physique / Géologie",
// //     coordinates: { latitude: 33.22575, longitude: -8.48778 },
// //   },
// //   {
// //     name: "Département de Mathématique",
// //     coordinates: { latitude: 33.22522, longitude: -8.48817 },
// //   },
// //   {
// //     name: "Département de Géologie",
// //     coordinates: { latitude: 33.22528, longitude: -8.48772 },
// //   },
// //   {
// //     name: "Département Informatique",
// //     coordinates: { latitude: 33.22489, longitude: -8.48764 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.225, longitude: -8.48844 },
// //   },
// // ];

// // const FACULTY_RADIUS = 100; // Vous pouvez ajuster cette valeur selon votre besoin

// // export default function API_map() {
// //   const [mapType, setMapType] = useState("standard");
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [destination, setDestination] = useState('');
// //   const [destinationCoordinates, setDestinationCoordinates] = useState(null);
// //   const [distance, setDistance] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const mapViewRef = useRef(null);

// //   useEffect(() => {
// //     const checkUserLocation = async () => {
// //       try {
// //         let location = await Location.getCurrentPositionAsync({});
// //         setUserLocation(location.coords);
// //       } catch (error) {
// //         console.error('Erreur de récupération de la position:', error);
// //       }
// //     };

// //     const interval = setInterval(() => {
// //       checkUserLocation();
// //     }, 10000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const getDestinationCoordinates = async () => {
// //     try {
// //       const destinationLocation = locations.find(loc => loc.name === destination);
// //       if (destinationLocation) {
// //         setDestinationCoordinates(destinationLocation.coordinates);
// //       } else {
// //         Alert.alert('Destination invalide', 'Veuillez sélectionner une destination valide parmi les options disponibles.');
// //       }
// //     } catch (error) {
// //       console.error('Erreur de géocodage de la destination:', error);
// //     }
// //   };

// //   const handleGetDirections = () => {
// //     if (destination.trim() === '') {
// //       Alert.alert('Erreur', 'Veuillez saisir une destination valide.');
// //       return;
// //     }

// //     getDestinationCoordinates();
// //   };

// //   const toggleMapType = () => {
// //     setMapType((prevMapType) =>
// //       prevMapType === "standard" ? "satellite" : "standard"
// //     );
// //   };

// //   const [tripInfo, setTripInfo] = useState(null);

// //   const traceRouteOnReady = (args: any) => {
// //     if (args) {
// //       // args.distance
// //       // args.duration
// //       setDistance(args.distance);
// //       setDuration(args.duration);
// //     }
// //   };
// //   const checkUserLocation = async () => {
// //     try {
// //       let location = await Location.getCurrentPositionAsync({});
// //       setUserLocation(location.coords);
// //     } catch (error) {
// //       console.error('Erreur lors de la récupération de la position:', error);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         ref={mapViewRef}
// //         minZoomLevel={17}
// //         maxZoomLevel={20}
// //         mapType={mapType}
// //         style={styles.map}
// //         initialRegion={{
// //           ...facultyCoordinates,
// //           latitudeDelta: 0.005,
// //           longitudeDelta: 0.005,
// //         }}
// //         provider={PROVIDER_GOOGLE}
// //         showsUserLocation={true}
// //         followsUserLocation={true}
// //       >
// //         <Marker
// //   coordinate={facultyCoordinates}
// //   title="Faculté des Sciences"
// //   description="El jadida, Maroc"
// //   showCallout
// // >
// //   {/* Contenu du callout */}
// //   <Callout>
// //     <Text>Faculté des Sciences</Text>
// //   </Callout>
// // </Marker>

// //         {locations.map((item, index) => (
// //           <Marker key={index} coordinate={item.coordinates} title={item.name} description={item.name} showCallout pinColor="black">
// //             <Callout>
// //               <Text>{item.name}</Text>
// //             </Callout>

// //           </Marker>
// //         ))}

// //         {userLocation && (
// //           <Marker
// //             coordinate={{
// //               latitude: userLocation.latitude,
// //               longitude: userLocation.longitude,
// //             }}
// //             title="Votre position"
// //             pinColor="blue"
// //           />
// //         )}

// //         {destinationCoordinates && userLocation && (
// //           <MapViewDirections
// //             origin={userLocation}
// //             destination={destinationCoordinates}
// //             apikey={''}
// //             strokeWidth={4}
// //             strokeColor="hotpink"
// //             mode="WALKING"
// //             onReady={traceRouteOnReady}
// //             // onReady={(result) => {
// //             //   console.log('Informations sur le trajet:', result);
// //             //   setTripInfo(result);
// //             // }}
// //           />
// //         )}
// //       </MapView>

// //       <TextInput
// //         style={styles.destinationInput}
// //         value={destination}
// //         onChangeText={setDestination}
// //         placeholder="Entrez votre destination"
// //       />

// //       <TouchableOpacity style={styles.getDirectionsButton} onPress={handleGetDirections}>
// //         <Text style={styles.getDirectionsButtonText}>Destination</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
// //         <Text style={styles.mapTypeButtonText}>
// //           {mapType === "standard"
// //             ? "Mode satellite"
// //             : "Mode standard"}
// //         </Text>
// //       </TouchableOpacity>

// //       {distance && duration ? (
// //           <View style={styles.tripInfoContainer}>
// //             <Text>Distance: {distance.toFixed(2)} km</Text>
// //             <Text>Durée estimée: {Math.ceil(duration)} min</Text>
// //           </View>
// //         ) : null}

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     flex: 1,
// //   },
// //   destinationInput: {
// //     position: "absolute",
// //     top: 16,
// //     right: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   bottomBar: {
// //     position: "absolute",
// //     bottom: 16,
// //     left: 16,
// //     right: 16,
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     paddingVertical: 12,
// //     paddingHorizontal: 16,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   getDirectionsButton: {
// //     backgroundColor: "#fff",
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   getDirectionsButtonText: {
// //     fontWeight: "bold",
// //   },
// //   mapTypeButton: {
// //     backgroundColor: "#fff",
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   mapTypeButtonText: {
// //     fontWeight: "bold",
// //   },
// //   checkLocationButton: {
// //     backgroundColor: "#fff",
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   checkLocationButtonText: {
// //     fontWeight: "bold",
// //   },
// //   tripInfoContainer: {
// //     position: "absolute",
// //     bottom: 140, // Adjust as needed
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// // });

// // NON STABLE_AVEC C
// // import React, { useState, useEffect, useRef } from "react";
// // import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput, Modal } from "react-native";
// // import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
// // import * as Location from 'expo-location';
// // import MapViewDirections from 'react-native-maps-directions';

// // const facultyCoordinates = {
// //   latitude: 33.2258,
// //   longitude: -8.4867,
// // };

// // // Array of locations
// // const locations = [
// //   {
// //     name: "Administration",
// //     coordinates: { latitude: 33.22651, longitude: -8.486939 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.226328, longitude: -8.487133 },
// //   },
// //   {
// //     name: "Parking",
// //     coordinates: { latitude: 33.226615, longitude: -8.48742 },
// //   },
// //   {
// //     name: "Garage",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Entrée Parking",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Atelier",
// //     coordinates: { latitude: 33.226542, longitude: -8.486402 },
// //   },
// //   {
// //     name: "Entrée Etudiant",
// //     coordinates: { latitude: 33.226427, longitude: -8.486117 },
// //   },
// //   {
// //     name: "Entrée Principale",
// //     coordinates: { latitude: 33.226161, longitude: -8.485992 },
// //   },
// //   {
// //     name: "Amphé 1 Al Farabi",
// //     coordinates: { latitude: 33.226165, longitude: -8.48664 },
// //   },
// //   {
// //     name: "Amphé 2 Al Bayrouni",
// //     coordinates: { latitude: 33.22585, longitude: -8.4871 },
// //   },
// //   {
// //     name: "Amphé 3 Ibno Haitam",
// //     coordinates: { latitude: 33.225521, longitude: -8.487151 },
// //   },
// //   {
// //     name: "Cafétéria des enseignants",
// //     coordinates: { latitude: 33.226219, longitude: -8.48753 },
// //   },
// //   {
// //     name: "Amphi Ibno Nafiss",
// //     coordinates: { latitude: 33.225703, longitude: -8.485969 },
// //   },
// //   {
// //     name: "Affichage",
// //     coordinates: { latitude: 33.225655, longitude: -8.485769 },
// //   },
// //   { name: "Bloc B", coordinates: { latitude: 33.225345, longitude: -8.48567 } },
// //   { name: "Bloc A", coordinates: { latitude: 33.22539, longitude: -8.485967 } },
// //   {
// //     name: "Bloc C",
// //     coordinates: { latitude: 33.226161, longitude: -8.488013 },
// //   },
// //   { name: "Bloc D", coordinates: { latitude: 33.22583, longitude: -8.488338 } },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22517, longitude: -8.48556 },
// //   },
// //   {
// //     name: "Cafétéria des Etudiants",
// //     coordinates: { latitude: 33.22506, longitude: -8.48575 },
// //   },
// //   {
// //     name: "Amphi Ibn Younes",
// //     coordinates: { latitude: 33.22508, longitude: -8.48611 },
// //   },
// //   {
// //     name: "Département de biologie",
// //     coordinates: { latitude: 33.22478, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Département de chimie",
// //     coordinates: { latitude: 33.22442, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Animalerie",
// //     coordinates: { latitude: 33.224507, longitude: -8.486489 },
// //   },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22478, longitude: -8.48725 },
// //   },
// //   {
// //     name: "Département de Physique / Géologie",
// //     coordinates: { latitude: 33.22575, longitude: -8.48778 },
// //   },
// //   {
// //     name: "Département de Mathématique",
// //     coordinates: { latitude: 33.22522, longitude: -8.48817 },
// //   },
// //   {
// //     name: "Département de Géologie",
// //     coordinates: { latitude: 33.22528, longitude: -8.48772 },
// //   },
// //   {
// //     name: "Département Informatique",
// //     coordinates: { latitude: 33.22489, longitude: -8.48764 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.225, longitude: -8.48844 },
// //   },
// // ];

// // // Radius for faculty location
// // const FACULTY_RADIUS = 100;

// // export default function API_map() {
// //   const [mapType, setMapType] = useState("standard");
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [destination, setDestination] = useState('');
// //   const [destinationCoordinates, setDestinationCoordinates] = useState(null);
// //   const [distance, setDistance] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const mapViewRef = useRef(null);
// //   const [region, setRegion] = useState(null);
// //   const [modalVisible, setModalVisible] = useState(false);

// //   // UseEffect to check user location
// //   useEffect(() => {
// //     const checkUserLocation = async () => {
// //       try {
// //         let { status } = await Location.requestForegroundPermissionsAsync();
// //         if (status !== 'granted') {
// //           console.error('Permission to access location was denied');
// //           return;
// //         }
// //         let location = await Location.getCurrentPositionAsync({});
// //         setUserLocation(location.coords);

// //         // Update map region to center on user's position
// //         setRegion({
// //           latitude: location.coords.latitude,
// //           longitude: location.coords.longitude,
// //           latitudeDelta: 0.005,
// //           longitudeDelta: 0.005,
// //         });
// //       } catch (error) {
// //         console.error('Error getting location:', error);
// //       }
// //     };

// //     const interval = setInterval(() => {
// //       checkUserLocation();
// //     }, 10000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   // Function to get destination coordinates
// //   const getDestinationCoordinates = async () => {
// //     try {
// //       const destinationLocation = locations.find(loc => loc.name === destination);
// //       if (destinationLocation) {
// //         setDestinationCoordinates(destinationLocation.coordinates);
// //         setModalVisible(false); // Close the modal after selecting destination
// //       } else {
// //         Alert.alert('Invalid Destination', 'Please select a valid destination from the available options.');
// //       }
// //     } catch (error) {
// //       console.error('Error geocoding destination:', error);
// //     }
// //   };

// //   // Function to toggle map type
// //   const toggleMapType = () => {
// //     setMapType((prevMapType) =>
// //       prevMapType === "standard" ? "satellite" : "standard"
// //     );
// //   };

// //   // Function to trace route when ready
// //   const traceRouteOnReady = (args) => {
// //     if (args) {
// //       setDistance(args.distance);
// //       setDuration(args.duration);
// //     }
// //   };

// //   const onRegionChangeComplete = (region) => {
// //   setRegion(region);
// // };
// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         ref={mapViewRef}
// //         minZoomLevel={17}
// //         maxZoomLevel={20}
// //         mapType={mapType}
// //         style={styles.map}
// //         region={region}
// //         initialRegion={{
// //           ...facultyCoordinates,
// //           latitudeDelta: 0.005,
// //           longitudeDelta: 0.005,
// //         }}
// //         provider={PROVIDER_GOOGLE}
// //         showsUserLocation={true}
// //       >
// //         {/* Markers, Directions, etc. */}
// //         <Marker
// //   coordinate={facultyCoordinates}
// //   title="Faculté des Sciences"
// //   description="El jadida, Maroc"
// //   showCallout
// // >
// //   {/* Contenu du callout */}
// //   <Callout>
// //     <Text>Faculté des Sciences</Text>
// //   </Callout>
// // </Marker>

// //         {locations.map((item, index) => (
// //           <Marker key={index} coordinate={item.coordinates} title={item.name} description={item.name} showCallout pinColor="black">
// //             <Callout>
// //               <Text>{item.name}</Text>
// //             </Callout>

// //           </Marker>
// //         ))}
// //         {userLocation && (
// //        <Marker coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude,}}
// //        title="Votre position" pinColor="Green"/>)}

// //         {/* Ajoutez ceci pour tracer le chemin */}
// //         {userLocation && destinationCoordinates && (
// //           <MapViewDirections
// //             origin={userLocation}
// //             destination={destinationCoordinates}
// //             apikey={'AIzaSyCSyvolGooAFTh7AGtHUXF92MWHoPTrt_4'}
// //             strokeWidth={3}
// //             strokeColor="hotpink"
// //             mode="WALKING"

// //             onReady={(result) => traceRouteOnReady(result)}
// //           />
// //         )}
// //       </MapView>

// //       {/* Control Bar */}
// //       <View style={styles.controlBar}>
// //         {/* Map Type Button */}
// //         <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
// //           <Text style={styles.mapTypeButtonText}>
// //             {mapType === "standard" ? "Satellite Mode" : "Standard Mode"}
// //           </Text>
// //         </TouchableOpacity>

// //         {/* Get Destination Button */}
// //         <TouchableOpacity
// //           style={styles.getDestinationButton}
// //           onPress={() => setModalVisible(true)}
// //         >
// //           <Text style={styles.getDestinationButtonText}>Get Destination</Text>
// //         </TouchableOpacity>

// //         {/* Modal for entering destination */}
// //         <Modal
// //           animationType="slide"
// //           transparent={true}
// //           visible={modalVisible}
// //           onRequestClose={() => {
// //             setModalVisible(!modalVisible);
// //           }}
// //         >
// //           <View style={styles.centeredView}>
// //             <View style={styles.modalView}>
// //               <TextInput
// //                 style={styles.modalInput}
// //                 value={destination}
// //                 onChangeText={setDestination}
// //                 placeholder="Enter your destination"
// //               />
// //               <TouchableOpacity
// //                 style={styles.modalButton}
// //                 onPress={getDestinationCoordinates}
// //               >
// //                 <Text style={styles.modalButtonText}>Search Destination</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </Modal>
// //       </View>

// //       {/* Trip Information */}
// //       {distance && duration ? (
// //         <View style={styles.tripInfoContainer}>
// //           <Text>Distance: {distance.toFixed(2)} km</Text>
// //           <Text>Estimated Duration: {Math.ceil(duration)} min</Text>
// //         </View>
// //       ) : null}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     flex: 1,
// //   },
// //   controlBar: {
// //     position: "absolute",
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     paddingVertical: 12,
// //     paddingHorizontal: 16,
// //     borderRadius: 8,
// //     zIndex: 1,
// //     bottom: 16,
// //     left: 16,
// //     right: 16,
// //   },
// //   mapTypeButton: {
// //     backgroundColor: "#fff",
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   mapTypeButtonText: {
// //     fontWeight: "bold",
// //   },
// //   getDestinationButton: {
// //     backgroundColor: "#fff",
// //     padding: 12,
// //     borderRadius: 8,
// //   },
// //   getDestinationButtonText: {
// //     fontWeight: "bold",
// //   },
// //   centeredView: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: 22,
// //   },
// //   modalView: {
// //     margin: 20,
// //     backgroundColor: "white",
// //     borderRadius: 20,
// //     padding: 35,
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 0,
// //       height: 2
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 4,
// //     elevation: 5
// //   },
// //   modalInput: {
// //     backgroundColor: "#f2f2f2",
// //     padding: 12,
// //     borderRadius: 8,
// //     marginBottom: 20,
// //     width: '100%'
// //   },
// //   modalButton: {
// //     backgroundColor: "#2196F3",
// //     borderRadius: 8,
// //     padding: 10,
// //     elevation: 2,
// //     width: '100%'
// //   },
// //   modalButtonText: {
// //     color: "white",
// //     fontWeight: "bold",
// //     textAlign: "center"
// //   },
// //   tripInfoContainer: {
// //     position: "absolute",
// //     bottom: 140, // Adjust as needed
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// // });

// // STABELE_SK

// // import React, { useState, useEffect, useRef } from "react";
// // import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from "react-native";
// // import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
// // import * as Location from 'expo-location';
// // import MapViewDirections from 'react-native-maps-directions';

// // const facultyCoordinates = {
// //   latitude: 33.2258,
// //   longitude: -8.4867,
// // };

// // const locations = [
// // { name: "Département de Géologie", coordinates: { latitude: 33.22528, longitude: -8.48772 } },
// //   { name: "Département Informatique", coordinates: { latitude: 33.22489, longitude: -8.48764 } },
// //   { name: "Bibliothèque", coordinates: { latitude: 33.225, longitude: -8.48844 } },
// // ];

// // const FACULTY_RADIUS = 100;

// // const calculateDistance = (lat1, lon1, lat2, lon2) => {
// //   const R = 6371; // Rayon de la Terre en km
// //   const dLat = (lat2 - lat1) * (Math.PI / 180);
// //   const dLon = (lon2 - lon1) * (Math.PI / 180);
// //   const a =
// //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// //     Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
// //     Math.sin(dLon / 2) * Math.sin(dLon / 2);
// //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// //   const distance = R * c; // Distance en km
// //   return distance * 1000; // Convertir en mètres
// // };

// // export default function CustomMap() {
// //   const [mapType, setMapType] = useState("standard");
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [destination, setDestination] = useState('');
// //   const [destinationCoordinates, setDestinationCoordinates] = useState(null);
// //   const [isInsideFaculty, setIsInsideFaculty] = useState(false);
// //   const [showDirections, setShowDirections] = useState(false);
// //   const mapViewRef = useRef(null);

// //   useEffect(() => {
// //     const checkUserLocation = async () => {
// //       try {
// //         let { status } = await Location.requestForegroundPermissionsAsync();
// //         if (status !== 'granted') {
// //           console.error('Permission to access location was denied');
// //           return;
// //         }

// //         Location.watchPositionAsync(
// //           { distanceInterval: 10 }, // Mettez à jour toutes les 10 mètres
// //           (location) => {
// //             setUserLocation(location.coords);

// //             // Calculer la distance entre la position de l'utilisateur et la faculté
// //             const distanceFromFaculty = calculateDistance(
// //               location.coords.latitude,
// //               location.coords.longitude,
// //               facultyCoordinates.latitude,
// //               facultyCoordinates.longitude
// //             );
// //             setIsInsideFaculty(distanceFromFaculty <= FACULTY_RADIUS);
// //           }
// //         );
// //       } catch (error) {
// //         console.error('Erreur de récupération de la position:', error);
// //       }
// //     };

// //     checkUserLocation(); // Appeler immédiatement pour obtenir la position actuelle

// //     return () => {
// //       // Nettoyer les écouteurs lorsque le composant est démonté
// //       Location.stopLocationUpdatesAsync('locationListener');
// //     };
// //   }, []);

// //   const toggleMapType = () => {
// //     setMapType((prevMapType) =>
// //       prevMapType === "standard" ? "satellite" : "standard"
// //     );
// //   };

// //   const getDestinationCoordinates = async () => {
// //     try {
// //       const destinationLocation = locations.find(loc => loc.name === destination);
// //       if (destinationLocation) {
// //         setDestinationCoordinates(destinationLocation.coordinates);
// //         setShowDirections(true);
// //       } else {
// //         Alert.alert('Destination invalide', 'Veuillez sélectionner une destination valide parmi les options disponibles.');
// //       }
// //     } catch (error) {
// //       console.error('Erreur de géocodage de la destination:', error);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         ref={mapViewRef}
// //         minZoomLevel={17}
// //         maxZoomLevel={20}
// //         mapType={mapType}
// //         style={styles.map}
// //         initialRegion={{
// //           ...facultyCoordinates,
// //           latitudeDelta: 0.005,
// //           longitudeDelta: 0.005,
// //         }}
// //         provider={PROVIDER_GOOGLE}
// //         showsUserLocation={true}
// //         followsUserLocation={true}
// //       >
// //         <Marker
// //           coordinate={facultyCoordinates}
// //           title="Faculté des Sciences "
// //           description="El jadida, Maroc"
// //         >
// //           <Callout>
// //             <Text>Faculté des Sciences</Text>
// //           </Callout>
// //         </Marker>

// //         {locations.map((item, index) => (
// //           <Marker key={index} coordinate={item.coordinates} title={item.name}>
// //             <Callout>
// //               <Text>{item.name}</Text>
// //             </Callout>
// //           </Marker>
// //         ))}

// //         {userLocation && (
// //           <Marker
// //             coordinate={{
// //               latitude: userLocation.latitude,
// //               longitude: userLocation.longitude,
// //             }}
// //             title="Votre position"
// //             pinColor="blue"
// //           />
// //         )}

// //         {showDirections && destinationCoordinates && userLocation && (
// //           <MapViewDirections
// //             origin={userLocation}
// //             destination={destinationCoordinates}
// //             apikey={'AIzaSyCSyvolGooAFTh7AGtHUXF92MWHoPTrt_4'}
// //             strokeWidth={3}
// //             strokeColor="hotpink"
// //           />
// //         )}
// //       </MapView>

// //       <TextInput
// //         style={styles.destinationInput}
// //         value={destination}
// //         onChangeText={setDestination}
// //         placeholder="Entrez votre destination"
// //       />

// //       <TouchableOpacity style={styles.getDirectionsButton} onPress={getDestinationCoordinates}>
// //         <Text style={styles.getDirectionsButtonText}>Obtenir des directions</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
// //         <Text style={styles.mapTypeButtonText}>
// //           {mapType === "standard"
// //             ? "Passer à Satellite"
// //             : "Passer à Par défaut"}
// //         </Text>
// //       </TouchableOpacity>

// //       <View style={styles.geofenceMessageContainer}>
// //         <Text style={styles.geofenceMessageText}>
// //           {isInsideFaculty ? "Vous êtes à l'intérieur de la faculté." : "Vous êtes à l'extérieur de la faculté."}
// //         </Text>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     paddingHorizontal: 16, // Ajout de marges horizontales
// //     paddingVertical: 24, // Ajout de marges verticales
// //   },
// //   map: {
// //     flex: 1,
// //     borderRadius: 10, // Ajout de coins arrondis à la carte
// //     overflow: 'hidden', // Assure que la carte respecte les coins arrondis
// //   },
// //   geofenceMessageContainer: {
// //     position: "absolute",
// //     bottom: 16,
// //     alignSelf: "center",
// //     backgroundColor: "#4CAF50",
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 20,
// //     zIndex: 1,
// //   },
// //   geofenceMessageText: {
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// //   inputContainer: {
// //     flexDirection: 'row', // Alignement horizontal des éléments
// //     alignItems: 'center', // Alignement vertical des éléments
// //     backgroundColor: '#fff',
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     borderRadius: 10,
// //     marginBottom: 16, // Espacement en bas
// //     elevation: 2,
// //   },
// //   destinationInput: {
// //     flex: 1, // Pour que l'input prenne tout l'espace disponible
// //     marginRight: 8, // Espacement à droite
// //   },
// //   getCurrentLocationButton: {
// //     position: "absolute",
// //     top: 16,
// //     left: 16,
// //     backgroundColor: "#FF5722", // Couleur de fond orange
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 10,
// //     elevation: 2,
// //   },
// //   getCurrentLocationButtonText: {
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// //   getDirectionsButton: {
// //     position: "absolute",
// //     top: 16,
// //     right: 16,
// //     backgroundColor: "#2196F3", // Couleur de fond bleue
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 10,
// //     elevation: 2,
// //   },
// //   getDirectionsButtonText: {
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// //   mapTypeButton: {
// //     position: "absolute",
// //     top: 16,
// //     left: 16,
// //     backgroundColor: "#2196F3", // Couleur de fond bleue
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 10,
// //     elevation: 2,
// //   },
// //   mapTypeButtonText: {
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// // });

// // NON STABLE_SANS C

// // import React, { useState, useEffect, useRef } from "react";
// // import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from "react-native";
// // import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
// // import * as Location from 'expo-location';
// // import MapViewDirections from 'react-native-maps-directions';

// // const facultyCoordinates = {
// //   latitude: 33.2258,
// //   longitude: -8.4867,
// // };
// // const locations = [
// //   {
// //     name: "Administration",
// //     coordinates: { latitude: 33.22651, longitude: -8.486939 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.226328, longitude: -8.487133 },
// //   },
// //   {
// //     name: "Parking",
// //     coordinates: { latitude: 33.226615, longitude: -8.48742 },
// //   },
// //   {
// //     name: "Garage",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Entrée Parking",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Atelier",
// //     coordinates: { latitude: 33.226542, longitude: -8.486402 },
// //   },
// //   {
// //     name: "Entrée Etudiant",
// //     coordinates: { latitude: 33.226427, longitude: -8.486117 },
// //   },
// //   {
// //     name: "Entrée Principale",
// //     coordinates: { latitude: 33.226161, longitude: -8.485992 },
// //   },
// //   {
// //     name: "Amphé 1 Al Farabi",
// //     coordinates: { latitude: 33.226165, longitude: -8.48664 },
// //   },
// //   {
// //     name: "Amphé 2 Al Bayrouni",
// //     coordinates: { latitude: 33.22585, longitude: -8.4871 },
// //   },
// //   {
// //     name: "Amphé 3 Ibno Haitam",
// //     coordinates: { latitude: 33.225521, longitude: -8.487151 },
// //   },
// //   {
// //     name: "Cafétéria des enseignants",
// //     coordinates: { latitude: 33.226219, longitude: -8.48753 },
// //   },
// //   {
// //     name: "Amphi Ibno Nafiss",
// //     coordinates: { latitude: 33.225703, longitude: -8.485969 },
// //   },
// //   {
// //     name: "Affichage",
// //     coordinates: { latitude: 33.225655, longitude: -8.485769 },
// //   },
// //   { name: "Bloc B", coordinates: { latitude: 33.225345, longitude: -8.48567 } },
// //   { name: "Bloc A", coordinates: { latitude: 33.22539, longitude: -8.485967 } },
// //   {
// //     name: "Bloc C",
// //     coordinates: { latitude: 33.226161, longitude: -8.488013 },
// //   },
// //   { name: "Bloc D", coordinates: { latitude: 33.22583, longitude: -8.488338 } },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22517, longitude: -8.48556 },
// //   },
// //   {
// //     name: "Cafétéria des Etudiants",
// //     coordinates: { latitude: 33.22506, longitude: -8.48575 },
// //   },
// //   {
// //     name: "Amphi Ibn Younes",
// //     coordinates: { latitude: 33.22508, longitude: -8.48611 },
// //   },
// //   {
// //     name: "Département de biologie",
// //     coordinates: { latitude: 33.22478, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Département de chimie",
// //     coordinates: { latitude: 33.22442, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Animalerie",
// //     coordinates: { latitude: 33.224507, longitude: -8.486489 },
// //   },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22478, longitude: -8.48725 },
// //   },
// //   {
// //     name: "Département de Physique / Géologie",
// //     coordinates: { latitude: 33.22575, longitude: -8.48778 },
// //   },
// //   {
// //     name: "Département de Mathématique",
// //     coordinates: { latitude: 33.22522, longitude: -8.48817 },
// //   },
// //   {
// //     name: "Département de Géologie",
// //     coordinates: { latitude: 33.22528, longitude: -8.48772 },
// //   },
// //   {
// //     name: "Département Informatique",
// //     coordinates: { latitude: 33.22489, longitude: -8.48764 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.225, longitude: -8.48844 },
// //   },
// // ];

// // const FACULTY_RADIUS = 100; // Vous pouvez ajuster cette valeur selon votre besoin

// // export default function API_map() {
// //   const [mapType, setMapType] = useState("standard");
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [destination, setDestination] = useState('');
// //   const [destinationCoordinates, setDestinationCoordinates] = useState(null);
// //   const [distance, setDistance] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const mapViewRef = useRef(null);

// //   useEffect(() => {
// //     const checkUserLocation = async () => {
// //       try {
// //         let location = await Location.getCurrentPositionAsync({});
// //         setUserLocation(location.coords);
// //       } catch (error) {
// //         console.error('Erreur de récupération de la position:', error);
// //       }
// //     };

// //     const interval = setInterval(() => {
// //       checkUserLocation();
// //     }, 10000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const getDestinationCoordinates = async () => {
// //     try {
// //       const destinationLocation = locations.find(loc => loc.name === destination);
// //       if (destinationLocation) {
// //         setDestinationCoordinates(destinationLocation.coordinates);
// //       } else {
// //         Alert.alert('Destination invalide', 'Veuillez sélectionner une destination valide parmi les options disponibles.');
// //       }
// //     } catch (error) {
// //       console.error('Erreur de géocodage de la destination:', error);
// //     }
// //   };

// //   const handleGetDirections = () => {
// //     if (destination.trim() === '') {
// //       Alert.alert('Erreur', 'Veuillez saisir une destination valide.');
// //       return;
// //     }

// //     getDestinationCoordinates();
// //   };

// //   const toggleMapType = () => {
// //     setMapType((prevMapType) =>
// //       prevMapType === "standard" ? "satellite" : "standard"
// //     );
// //   };

// //   const [tripInfo, setTripInfo] = useState(null);

// //   const traceRouteOnReady = (args: any) => {
// //     if (args) {
// //       // args.distance
// //       // args.duration
// //       setDistance(args.distance);
// //       setDuration(args.duration);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         ref={mapViewRef}
// //         minZoomLevel={17}
// //         maxZoomLevel={20}
// //         mapType={mapType}
// //         style={styles.map}
// //         initialRegion={{
// //           ...facultyCoordinates,
// //           latitudeDelta: 0.005,
// //           longitudeDelta: 0.005,
// //         }}
// //         provider={PROVIDER_GOOGLE}
// //         showsUserLocation={true}
// //         followsUserLocation={true}
// //       >
// //         <Marker
// //   coordinate={facultyCoordinates}
// //   title="Faculté des Sciences"
// //   description="El jadida, Maroc"
// //   showCallout
// // >
// //   {/* Contenu du callout */}
// //   <Callout>
// //     <Text>Faculté des Sciences</Text>
// //   </Callout>
// // </Marker>

// //         {locations.map((item, index) => (
// //           <Marker key={index} coordinate={item.coordinates} title={item.name} description={item.name} showCallout pinColor="black">
// //             <Callout>
// //               <Text>{item.name}</Text>
// //             </Callout>

// //           </Marker>
// //         ))}

// //         {userLocation && (
// //           <Marker
// //             coordinate={{
// //               latitude: userLocation.latitude,
// //               longitude: userLocation.longitude,
// //             }}
// //             title="Votre position"
// //             pinColor="blue"
// //           />
// //         )}

// //         {destinationCoordinates && userLocation && (
// //           <MapViewDirections
// //             origin={userLocation}
// //             destination={destinationCoordinates}
// //             apikey={'AIzaSyCSyvolGooAFTh7AGtHUXF92MWHoPTrt_4'}
// //             strokeWidth={4}
// //             strokeColor="hotpink"
// //             mode="WALKING"
// //             onReady={traceRouteOnReady}
// //             // onReady={(result) => {
// //             //   console.log('Informations sur le trajet:', result);
// //             //   setTripInfo(result);
// //             // }}
// //           />
// //         )}
// //       </MapView>

// //       <TextInput
// //         style={styles.destinationInput}
// //         value={destination}
// //         onChangeText={setDestination}
// //         placeholder="Entrez votre destination"
// //       />

// //       <TouchableOpacity style={styles.getDirectionsButton} onPress={handleGetDirections}>
// //         <Text style={styles.getDirectionsButtonText}>Obtenir des directions</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
// //         <Text style={styles.mapTypeButtonText}>
// //           {mapType === "standard"
// //             ? "Passer à Satellite"
// //             : "Passer à Par défaut"}
// //         </Text>
// //       </TouchableOpacity>
// //       {distance && duration ? (
// //           <View style={styles.tripInfoContainer}>
// //             <Text>Distance: {distance.toFixed(2)} km</Text>
// //             <Text>Durée estimée: {Math.ceil(duration)} min</Text>
// //           </View>
// //         ) : null}

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     flex: 1,
// //   },
// //   destinationInput: {
// //     position: "absolute",
// //     top: 16,
// //     right: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   getDirectionsButton: {
// //     position: "absolute",
// //     bottom: 16,
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   getDirectionsButtonText: {
// //     fontWeight: "bold",
// //   },
// //   mapTypeButton: {
// //     position: "absolute",
// //     top: 16,
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   mapTypeButtonText: {
// //     fontWeight: "bold",
// //   },
// //   tripInfoContainer: {
// //     position: "absolute",
// //     bottom: 100,
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// // });

// // import React, { useState, useEffect, useRef } from "react";
// // import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from "react-native";
// // import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
// // import * as Location from 'expo-location';
// // import MapViewDirections from 'react-native-maps-directions';

// // const facultyCoordinates = {
// //   latitude: 33.2258,
// //   longitude: -8.4867,
// // };
// // const locations = [
// //   {
// //     name: "Administration",
// //     coordinates: { latitude: 33.22651, longitude: -8.486939 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.226328, longitude: -8.487133 },
// //   },
// //   {
// //     name: "Parking",
// //     coordinates: { latitude: 33.226615, longitude: -8.48742 },
// //   },
// //   {
// //     name: "Garage",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Entrée Parking",
// //     coordinates: { latitude: 33.226872, longitude: -8.486474 },
// //   },
// //   {
// //     name: "Atelier",
// //     coordinates: { latitude: 33.226542, longitude: -8.486402 },
// //   },
// //   {
// //     name: "Entrée Etudiant",
// //     coordinates: { latitude: 33.226427, longitude: -8.486117 },
// //   },
// //   {
// //     name: "Entrée Principale",
// //     coordinates: { latitude: 33.226161, longitude: -8.485992 },
// //   },
// //   {
// //     name: "Amphé 1 Al Farabi",
// //     coordinates: { latitude: 33.226165, longitude: -8.48664 },
// //   },
// //   {
// //     name: "Amphé 2 Al Bayrouni",
// //     coordinates: { latitude: 33.22585, longitude: -8.4871 },
// //   },
// //   {
// //     name: "Amphé 3 Ibno Haitam",
// //     coordinates: { latitude: 33.225521, longitude: -8.487151 },
// //   },
// //   {
// //     name: "Cafétéria des enseignants",
// //     coordinates: { latitude: 33.226219, longitude: -8.48753 },
// //   },
// //   {
// //     name: "Amphi Ibno Nafiss",
// //     coordinates: { latitude: 33.225703, longitude: -8.485969 },
// //   },
// //   {
// //     name: "Affichage",
// //     coordinates: { latitude: 33.225655, longitude: -8.485769 },
// //   },
// //   { name: "Bloc B", coordinates: { latitude: 33.225345, longitude: -8.48567 } },
// //   { name: "Bloc A", coordinates: { latitude: 33.22539, longitude: -8.485967 } },
// //   {
// //     name: "Bloc C",
// //     coordinates: { latitude: 33.226161, longitude: -8.488013 },
// //   },
// //   { name: "Bloc D", coordinates: { latitude: 33.22583, longitude: -8.488338 } },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22517, longitude: -8.48556 },
// //   },
// //   {
// //     name: "Cafétéria des Etudiants",
// //     coordinates: { latitude: 33.22506, longitude: -8.48575 },
// //   },
// //   {
// //     name: "Amphi Ibn Younes",
// //     coordinates: { latitude: 33.22508, longitude: -8.48611 },
// //   },
// //   {
// //     name: "Département de biologie",
// //     coordinates: { latitude: 33.22478, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Département de chimie",
// //     coordinates: { latitude: 33.22442, longitude: -8.48592 },
// //   },
// //   {
// //     name: "Animalerie",
// //     coordinates: { latitude: 33.224507, longitude: -8.486489 },
// //   },
// //   {
// //     name: "Toilette",
// //     coordinates: { latitude: 33.22478, longitude: -8.48725 },
// //   },
// //   {
// //     name: "Département de Physique / Géologie",
// //     coordinates: { latitude: 33.22575, longitude: -8.48778 },
// //   },
// //   {
// //     name: "Département de Mathématique",
// //     coordinates: { latitude: 33.22522, longitude: -8.48817 },
// //   },
// //   {
// //     name: "Département de Géologie",
// //     coordinates: { latitude: 33.22528, longitude: -8.48772 },
// //   },
// //   {
// //     name: "Département Informatique",
// //     coordinates: { latitude: 33.22489, longitude: -8.48764 },
// //   },
// //   {
// //     name: "Bibliothèque",
// //     coordinates: { latitude: 33.225, longitude: -8.48844 },
// //   },
// // ];

// // const FACULTY_RADIUS = 100; // Vous pouvez ajuster cette valeur selon votre besoin

// // export default function API_map() {
// //   const [mapType, setMapType] = useState("standard");
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [destination, setDestination] = useState('');
// //   const [destinationCoordinates, setDestinationCoordinates] = useState(null);
// //   const [distance, setDistance] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const mapViewRef = useRef(null);

// //   useEffect(() => {
// //     const checkUserLocation = async () => {
// //       try {
// //         let location = await Location.getCurrentPositionAsync({});
// //         setUserLocation(location.coords);
// //       } catch (error) {
// //         console.error('Erreur de récupération de la position:', error);
// //       }
// //     };

// //     const interval = setInterval(() => {
// //       checkUserLocation();
// //     }, 10000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const getDestinationCoordinates = async () => {
// //     try {
// //       const destinationLocation = locations.find(loc => loc.name === destination);
// //       if (destinationLocation) {
// //         setDestinationCoordinates(destinationLocation.coordinates);
// //       } else {
// //         Alert.alert('Destination invalide', 'Veuillez sélectionner une destination valide parmi les options disponibles.');
// //       }
// //     } catch (error) {
// //       console.error('Erreur de géocodage de la destination:', error);
// //     }
// //   };

// //   const handleGetDirections = () => {
// //     if (destination.trim() === '') {
// //       Alert.alert('Erreur', 'Veuillez saisir une destination valide.');
// //       return;
// //     }

// //     getDestinationCoordinates();
// //   };

// //   const toggleMapType = () => {
// //     setMapType((prevMapType) =>
// //       prevMapType === "standard" ? "satellite" : "standard"
// //     );
// //   };

// //   const [tripInfo, setTripInfo] = useState(null);

// //   const traceRouteOnReady = (args: any) => {
// //     if (args) {
// //       // args.distance
// //       // args.duration
// //       setDistance(args.distance);
// //       setDuration(args.duration);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         ref={mapViewRef}
// //         minZoomLevel={17}
// //         maxZoomLevel={20}
// //         mapType={mapType}
// //         style={styles.map}
// //         initialRegion={{
// //           ...facultyCoordinates,
// //           latitudeDelta: 0.005,
// //           longitudeDelta: 0.005,
// //         }}
// //         provider={PROVIDER_GOOGLE}
// //         showsUserLocation={true}
// //         followsUserLocation={true}
// //       >
// //         <Marker
// //   coordinate={facultyCoordinates}
// //   title="Faculté des Sciences"
// //   description="El jadida, Maroc"
// //   showCallout
// // >
// //   {/* Contenu du callout */}
// //   <Callout>
// //     <Text>Faculté des Sciences</Text>
// //   </Callout>
// // </Marker>

// //         {locations.map((item, index) => (
// //           <Marker key={index} coordinate={item.coordinates} title={item.name} description={item.name} showCallout pinColor="black">
// //             <Callout>
// //               <Text>{item.name}</Text>
// //             </Callout>

// //           </Marker>
// //         ))}

// //         {userLocation && (
// //           <Marker
// //             coordinate={{
// //               latitude: userLocation.latitude,
// //               longitude: userLocation.longitude,
// //             }}
// //             title="Votre position"
// //             pinColor="blue"
// //           />
// //         )}

// //         {destinationCoordinates && userLocation && (
// //           <MapViewDirections
// //             origin={userLocation}
// //             destination={destinationCoordinates}
// //             apikey={'AIzaSyCSyvolGooAFTh7AGtHUXF92MWHoPTrt_4'}
// //             strokeWidth={4}
// //             strokeColor="hotpink"
// //             mode="WALKING"
// //             onReady={traceRouteOnReady}
// //             // onReady={(result) => {
// //             //   console.log('Informations sur le trajet:', result);
// //             //   setTripInfo(result);
// //             // }}
// //           />
// //         )}
// //       </MapView>

// //       <TextInput
// //         style={styles.destinationInput}
// //         value={destination}
// //         onChangeText={setDestination}
// //         placeholder="Entrez votre destination"
// //       />

// //       <TouchableOpacity style={styles.getDirectionsButton} onPress={handleGetDirections}>
// //         <Text style={styles.getDirectionsButtonText}>Obtenir des directions</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
// //         <Text style={styles.mapTypeButtonText}>
// //           {mapType === "standard"
// //             ? "Passer à Satellite"
// //             : "Passer à Par défaut"}
// //         </Text>
// //       </TouchableOpacity>
// //       {distance && duration ? (
// //           <View style={styles.tripInfoContainer}>
// //             <Text>Distance: {distance.toFixed(2)} km</Text>
// //             <Text>Durée estimée: {Math.ceil(duration)} min</Text>
// //           </View>
// //         ) : null}

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     flex: 1,
// //   },
// //   destinationInput: {
// //     position: "absolute",
// //     top: 16,
// //     right: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   getDirectionsButton: {
// //     position: "absolute",
// //     bottom: 16,
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   getDirectionsButtonText: {
// //     fontWeight: "bold",
// //   },
// //   mapTypeButton: {
// //     position: "absolute",
// //     top: 16,
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// //   mapTypeButtonText: {
// //     fontWeight: "bold",
// //   },
// //   tripInfoContainer: {
// //     position: "absolute",
// //     bottom: 100,
// //     left: 16,
// //     backgroundColor: "rgba(255, 255, 255, 0.7)",
// //     padding: 12,
// //     borderRadius: 8,
// //     zIndex: 1,
// //   },
// // });

/////Brazar

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

const FACULTY_RADIUS = 100;

export default function API_map() {
  const [mapType, setMapType] = useState("standard");
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const blackMarker = require("./assets/marker-black.png");
  const whiteMarker = require("./assets/marker-white.png");
  const drawer = useRef(null);

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

  const getDestinationCoordinates = async () => {
    try {
      const destinationLocation = locations.find(
        (loc) => loc.name === destination
      );
      console.log(destinationLocation);
      if (destinationLocation) {
        setDestinationCoordinates(destinationLocation.coordinates);
      } else {
        Alert.alert(
          "Destination invalide",
          "Veuillez saisir une destination valide"
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
    console.log(mapType);
    setMapType((prevMapType) =>
      prevMapType === "standard" ? "satellite" : "standard"
    );
    console.log(mapType);
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
              image={mapType === "standard" ? blackMarker : whiteMarker}
              style={styles.markerStyle}
            />
          )}
          {destinationCoordinates && (
            <Marker
              coordinate={destinationCoordinates}
              image={mapType === "standard" ? blackMarker : whiteMarker}
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
            <Text>De votre position à {destination} :</Text>
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
    top: 34,
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
    padding: 12,
    borderRadius: 50,
    zIndex: 1,
    width: 48,
  },
  SearchButton: {
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(200, 200, 200, 0)",
    padding: 12,
    borderRadius: 50,
    zIndex: 1,
    width: 48,
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

/* //Me
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
} from "react-native";
import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput ,DrawerLayoutAndroid} from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
const Markerpin = require("./assets/pin.png");
const satellite = require("./assets/satellite.png");

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

const FACULTY_RADIUS = 100;

export default function API_map() {
  const [mapType, setMapType] = useState("standard");
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        });
      } catch (error) {
        console.error("Erreur de récupération de la position:", error);
      }
    };

    checkUserLocation();
  }, []);

  const getDestinationCoordinates = async () => {
    try {
      const destinationLocation = locations.find(
        (loc) => loc.name === destination
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
    <View style={styles.container}>
      <MapView
        minZoomLevel={17}
        maxZoomLevel={20}
        mapType={mapType}
        style={styles.map}
        initialRegion={{
          ...facultyCoordinates,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
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
            image={Markerpin}
            style={styles.markerStyle}
          />
        )}

        {destinationCoordinates && (
          <Marker
            coordinate={destinationCoordinates}
            image={Markerpin}
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
            // Vérifier si l'emplacement correspond à la destination souhaitée
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
            // Retourner null si l'emplacement ne correspond pas à la destination souhaitée
            return null;
          })}
      </MapView>

      <TextInput
        style={styles.destinationInput}
        value={destination}
        onChangeText={setDestination}
        placeholder="Entrez votre destination"
      />

      <TouchableOpacity
        style={styles.getDirectionsButton}
        onPress={handleGetDirections}
      >
        <Text style={styles.getDirectionsButtonText}>
          Obtenir des directions
        </Text>
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
  // getDirectionsButton: {
  //   position: "absolute",
  //   bottom: 16,
  //   left: 16,
  //   backgroundColor: "rgba(255, 255, 255, 0.7)",
  //   padding: 12,
  //   borderRadius: 8,
  //   zIndex: 1,
  // },
  getDirectionsButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#aac582",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 50, // pour obtenir une forme arrondie
    elevation: 8, // pour donner une ombre
  },
  getDirectionsButtonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  getDirectionsButtonText: {
    fontWeight: "bold",
  },
  mapTypeButton: {
    position: "absolute",
    top: 24,
    left: 24,
    backgroundColor: "#aac582",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    elevation: 8,
  },
  mapTypeButtonText: {
    fontWeight: "bold",
    color: "white",
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
 */
