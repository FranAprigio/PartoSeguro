import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitosSociais = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
            Direitos sociais são um conjunto de garantias
            e benefícios que visam assegurar o bem-estar,
            igualdade e dignidade dos cidadãos na sociedade, 
            abrangendo áreas como educação, saúde, trabalho, 
            previdência social e moradia. Eles são fundamentais 
            para promover a justiça social e a qualidade de vida
            da população.
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
