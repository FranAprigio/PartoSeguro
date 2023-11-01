import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const BackgroundComponent = ({ children, colors }) => {
  return (
    <LinearGradient
      colors={colors || ["#FCCCD4 33.02%", "#FCE5BF 30.12%", "#E3C3B9 15,63%"]}
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