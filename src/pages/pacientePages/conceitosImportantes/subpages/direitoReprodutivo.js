import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitoReprodutivo = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
            Direito reprodutivo é o conjunto de direitos que envolve a 
            capacidade das pessoas de tomar decisões relacionadas à 
            reprodução de forma livre, informada e sem discriminação. 
            Isso abrange a escolha de ter filhos, o acesso a métodos 
            contraceptivos, o cuidado pré-natal, a assistência ao parto 
            e a decisão sobre interrupção da gravidez, quando legal. 
            Esse conceito visa garantir a autonomia e a dignidade das 
            pessoas em questões reprodutivas.
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
