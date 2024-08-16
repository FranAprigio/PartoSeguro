import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Initial = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0.5)).current; 

  const handleSubmit = () => {
    navigation.navigate("Menu");
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ]).start(() => {
      handleSubmit();
    });
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.imageContainer, opacity: fadeAnim }}>
        <Image
          source={require("../../assets/initial.png")}
          style={styles.image}
          resizeMode="contain" // Ajusta o modo de redimensionamento para garantir que a imagem se ajuste ao contêiner
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, // Ajuste a largura conforme necessário
    height: 300, // Ajuste a altura conforme necessário
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
