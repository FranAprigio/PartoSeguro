import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DIREITO_AO_CONHECIMENTO_E_VINCULAÇÃO_DA_MATERNIDADE = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
                É direito reconhecido por lei, toda gestante assistida pelo Sistema 
                Único de Saúde - SUS tem direito ao conhecimento e à vinculação prévia à: 
                I - maternidade na qual será realizado seu parto; 
                II – maternid1	ade na qual ela será atendida nos casos de intercorrência pré-natal. 
                Ou seja, é direito de toda gestante conhecer previamente a maternidade que seu bebê 
                passará pelo processo de nascimento. 
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
