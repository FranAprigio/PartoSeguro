import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PosicaoLitotomia  = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
          A posição litotomia é também chamada de posição ginecológica, 
          em que a gestante deita de costas com as pernas elevadas e apoiadas 
          em suportes, como estribos, geralmente nos suportes ginecológicos de 
          uma mesa de parto. Essa posição pode limitar a mobilidade da gestante e 
          é importante considerar suas preferências individuais.
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