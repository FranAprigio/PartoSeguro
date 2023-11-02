import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PlanoParto = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

          Os planos de parto são documentos que as gestantes elaboram para expressar suas 
          preferências e desejos relacionados ao trabalho de parto, parto e pós-parto. 
          Eles são uma ferramenta para facilitar a comunicação entre a gestante, sua equipe 
          de assistência médica e outros profissionais de saúde envolvidos no processo de parto. 
          Abaixo, você encontrará um exemplo de um plano de parto que você pode usar 
          como guia para criar o seu próprio:

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
