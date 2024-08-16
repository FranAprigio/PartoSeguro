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
          Como determinação legal, é de direito a presença de doula, além de acompanhante, durante o parto em maternidades e 
          estabelecimentos congêneres da rede pública e privada, independentemente do espaço físico do centro obstétrico. 
          Deste modo, cabe à administração desses serviços dar cumprimento à solicitação da parturiente, autorizando a presença de doula devidamente cadastrada previamente.
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
