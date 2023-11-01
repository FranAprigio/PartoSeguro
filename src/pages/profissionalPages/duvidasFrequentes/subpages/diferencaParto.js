import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DiferencaParto = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            Parto Vaginal Normal (PVN):

            Ocorre através do canal vaginal.
            Pode ser espontâneo ou induzido.
            Geralmente, não requer intervenções médicas significativas.
            A recuperação costuma ser mais rápida comparada a uma cesariana.
            Cesariana:

            Envolve uma incisão cirúrgica no abdômen e no útero para a retirada do bebê.
            É geralmente programada ou realizada em situações de emergência.
            Pode ser necessária devido a complicações médicas, posição do feto, partos múltiplos, entre outros motivos.
            A recuperação costuma ser mais demorada e pode envolver mais desconforto.

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
