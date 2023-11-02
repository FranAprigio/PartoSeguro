import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const ComoPreparar = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            Conhecimento da Legislação e Diretrizes Éticas: Esteja ciente das leis e
            regulamentos que regem a prática obstétrica em sua região, bem como diretrizes éticas relacionadas ao consentimento informado, privacidade e confidencialidade.

            Equipamento e Suprimentos: Certifique-se de ter acesso ao equipamento e aos
            suprimentos necessários para atender às necessidades da gestante e do bebê durante o parto.

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
