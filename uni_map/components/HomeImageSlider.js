import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
    url: require("../assets/sliderimage1.jpg"),
  },
  {
    url: require("../assets/sliderimage2.jpg"),
  },
  {
    url: require("../assets/sliderimage.jpg"),
  },
  {
    url: require("../assets/sliderimage4.jpg"),
  },
  {
    url: require("../assets/sliderimage5.jpg"),
  },
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 1000);

    return () => clearInterval(toggle);
  });

  return (
    <View styles={{ backgroundColor: "white" }}>
      <Slideshow
        position={position}
        dataSource={dataSource}
        arrowSize={0}
        indicatorSize={0}
        scrollEnabled={false}
        styles={{ backgroundColor: "white" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageSlider;
