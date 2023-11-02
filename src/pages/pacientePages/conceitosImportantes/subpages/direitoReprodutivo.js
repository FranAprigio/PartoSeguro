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

          Os direitos reprodutivos são uma parte fundamental dos direitos humanos e 
          englobam uma série de questões relacionadas à tomada de decisões reprodutivas, 
          à saúde reprodutiva e ao acesso a serviços de saúde relacionados à reprodução. 
          Esses direitos visam garantir que as pessoas tenham o controle sobre suas decisões 
          reprodutivas e o acesso a informações e serviços que lhes permitam tomar decisões 
          informadas e seguras sobre sua saúde reprodutiva. Alguns aspectos dos direitos reprodutivos incluem:

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
