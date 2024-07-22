import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const Puerpério = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
           O puerpério é o período pós-parto que abrange o período após o nascimento do
           bebê. Durante esse tempo, o corpo da mãe passa por várias mudanças, incluindo
           a recuperação do útero, a adaptação hormonal e as transformações físicas após a 
           gravidez. Além disso, é um período em que a mulher pode experimentar mudanças 
           emocionais e psicológicas significativas à medida que se ajusta aos desafios da 
           maternidade.
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