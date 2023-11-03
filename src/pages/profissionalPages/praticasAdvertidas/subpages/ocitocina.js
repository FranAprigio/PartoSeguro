import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const Ocitocina = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">


          O lado ruim da ocitocina sintética inclui o risco de contrações uterinas excessivas, distocia,
           necessidade de monitoramento intensivo, aumento do risco de cesariana e possíveis efeitos colaterais. 
           No entanto, seu uso é geralmente benéfico quando administrado corretamente em situações clínicas apropriadas. 
           A decisão de uso deve ser baseada na avaliação da saúde da mãe e do bebê, seguindo diretrizes rigorosas.

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
