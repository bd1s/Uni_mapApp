// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/homeunipic.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: undefined,
    aspectRatio: 1,
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#848c78",
  },
  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
