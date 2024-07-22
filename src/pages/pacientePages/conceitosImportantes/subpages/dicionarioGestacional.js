import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DICIONÁRIO_DA_GESTAÇÃO = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
                •	USG

                Ultrassonografia

                •	TP

                Trabalho de parto

                •	GO

                Ginecologista obstetra

                •	EO

                Enfermeira obstétrica

                •	DUM

                Data da última menstruação

                •	DPP

                Data provável de parto

                •	APGAR

              Teste que avalia o recém-nascido no 1º e 5º minuto de vida do 
              bebê de acordo com: aparência (cor da pele), pulso (batimentos cardíacos),
               gesticulação (reflexos do bebê), atividade (força) e respiração 
               (movimentos respiratórios).

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
