import { Image } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreenHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.InstructionsButton}
          onPress={() => props.nav.navigate("Instructions")}
        >
          <Text style={styles.HeaderText}>Instructions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => props.nav.navigate("Map")}
        >
          <Image
            source={require("../assets/map.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  InstructionsButton: {
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  mapButton: {
    right: 0,
    backgroundColor: "rgba(200, 200, 200, 0)",
    padding: 12,
    borderRadius: 50,
    zIndex: 1,
    width: 48,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default HomeScreenHeader;
