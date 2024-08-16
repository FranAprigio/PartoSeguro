import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PlanoPartoLegal = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
          O plano de parto é o documento que descreve as preferências da mulher no seu pré-parto, parto e pós-parto. Esse documento norteará a equipe médica quanto as suas preferências e permitirá que o momento do nascimento ocorra dentro das suas expectativas, sem limitar a conduta médica. 
          Todas as gestantes tem direito a um plano de parto e os hospitais são obrigados a recebê-los. 
          O plano de parto é a manifestação da autonomia da gestação e segunda a resolução nº 2.144/16, deve a equipe médica respeitar as decisões informadas e esclarecidas da gestante.

          É importante que todas as mulheres saibam seus direitos para o processo de nascimento do seu filho, o pré-parto, parto e pós-parto são singulares na vida de cada mulher e sua autonomia pode e deve ser respeitada. 
          O plano de parto viabiliza questionamentos formais em caso de alguma violação de sua vontade.
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
