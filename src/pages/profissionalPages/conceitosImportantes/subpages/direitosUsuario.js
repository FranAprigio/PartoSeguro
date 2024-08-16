import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitosUsuarioProf = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
          O direito do usuário refere-se às
          garantias e proteções concedidas a 
          pessoas que utilizam produtos, 
          serviços ou sistemas, como consumidores, 
          pacientes ou utilizadores de serviços públicos. 
          Isso envolve o acesso a informações, segurança, 
          privacidade e o direito de receber um tratamento 
          justo e de qualidade.
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
