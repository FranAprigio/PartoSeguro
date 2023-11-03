import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const ViolenciaObstetrica = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            A violência obstétrica refere-se a um conjunto de práticas e comportamentos abusivos, 
            desrespeitosos e humilhantes que ocorrem durante a assistência ao parto e ao nascimento. 
            Essas práticas violam os direitos reprodutivos e humanos das gestantes e podem ter sérias 
            implicações físicas e emocionais. A violência obstétrica pode assumir várias formas, incluindo:

            Falta de Consentimento Informado: Realizar procedimentos médicos sem o consentimento informado 
            da gestante, como cesarianas, episiotomias, exames ou intervenções.

            Intervenções Médicas Não Necessárias

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
