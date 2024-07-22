import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const Doula = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
           Uma doula é uma profissional de apoio emocional e físico que fornece assistência às gestantes 
           antes, durante e após o parto. Elas oferecem conforto, encorajamento, informações e suporte não 
           médico para ajudar as mulheres a terem experiências de parto mais positivas e empoderadas. 
           As doulas não realizam procedimentos médicos, mas desempenham um papel no bem-estar emocional e no 
           apoio durante o parto.
          </TextComponent>
        </S.Form>
      </S.Container>
    </BackgroundComponent>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    marginTop: 70,
  },
});