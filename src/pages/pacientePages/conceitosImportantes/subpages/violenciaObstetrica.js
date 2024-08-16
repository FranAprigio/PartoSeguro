import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const ViolenciaObstetrica = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
            A violência obstétrica refere-se a ações ou omissões, por parte 
            de profissionais de saúde, que desrespeitam os direitos e a dignidade 
            das mulheres durante o parto e o pós-parto. Isso pode incluir procedimentos 
            invasivos não consentidos, tratamento desrespeitoso, discriminação, humilhação 
            ou qualquer forma de abuso durante o processo de assistência ao parto.
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
