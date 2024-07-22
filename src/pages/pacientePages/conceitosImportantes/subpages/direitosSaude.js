import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitosSaude = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
            O direito à saúde é um princípio que assegura a todos os
            indivíduos o acesso a serviços de saúde de qualidade, 
            incluindo prevenção, tratamento e cuidados médicos. 
            Este direito visa garantir o bem-estar físico e mental, 
            bem como a igualdade no acesso aos serviços de saúde,
            promovendo uma sociedade mais saudável e justa.
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
