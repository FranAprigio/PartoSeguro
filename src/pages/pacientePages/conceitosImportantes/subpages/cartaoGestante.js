import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const CartaoGestante = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

          O "Cartão Gestante" pode ser uma ferramenta útil para manter um registro organizado das 
          informações médicas durante a gravidez e garantir que a gestante esteja bem informada 
          sobre sua saúde e o progresso da gestação. Também pode ser útil para profissionais de 
          saúde que prestam atendimento pré-natal, pois fornece um resumo das informações importantes.

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
