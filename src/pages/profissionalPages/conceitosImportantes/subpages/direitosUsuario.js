import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitosUsuario = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            As gestantes têm direitos específicos para proteger sua saúde e bem-estar durante
            a gravidez. No contexto dos direitos do usuário gestante, é importante considerar as seguintes questões:

            Direito à assistência médica pré-natal: As gestantes têm o direito de receber cuidados
            médicos adequados durante a gravidez, incluindo consultas pré-natais regulares para monitorar o desenvolvimento do feto e a saúde da mãe.

            Direito à informação: As gestantes têm o direito de receber informações claras
            e precisas sobre sua saúde e a saúde do feto, incluindo exames médicos, procedimentos e opções de tratamento.

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
