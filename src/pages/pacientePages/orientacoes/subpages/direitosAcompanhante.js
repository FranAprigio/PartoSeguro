import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitosAcompanhante = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
            O direito ao acompanhante no parto refere-se à garantia legal e 
            ética de que uma gestante tem o direito de ter a companhia de um 
            acompanhante de sua escolha durante o trabalho de parto, parto e 
            pós-parto. Esse acompanhante pode ser um familiar, parceiro ou 
            qualquer pessoa de sua preferência, e sua presença visa proporcionar
            apoio emocional, conforto e defesa dos direitos da gestante.
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
