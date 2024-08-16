import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PuxoDirigido = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
           O puxo dirigido é uma técnica utilizada durante o segundo estágio do trabalho de 
           parto, em que a parteira ou o médico instrui a gestante a realizar esforços ativos 
           de empurrar durante as contrações, ajudando a expulsar o bebê. É a prática de pedir 
           para a mulher fazer força e empurrar no momento do expulsivo, quando o bebê está prestes
           a nascer.
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