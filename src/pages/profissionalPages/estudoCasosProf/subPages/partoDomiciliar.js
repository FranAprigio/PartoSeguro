import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PartoDomiciliar = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            O parto domiciliar é quando uma gestante dá à luz em casa, em vez de um hospital.
            Tem vantagens, como um ambiente familiar e menos intervenções médicas, mas também riscos,
            pois complicações podem surgir sem recursos médicos imediatos. A decisão deve ser bem avaliada,
            considerando a saúde da gestante, assistência qualificada e plano de contingência.
            É importante verificar a legalidade e regulamentação locais.

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
