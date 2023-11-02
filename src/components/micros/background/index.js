import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const BackgroundComponent = ({ children, colors }) => {
  return (
    <LinearGradient
      colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});