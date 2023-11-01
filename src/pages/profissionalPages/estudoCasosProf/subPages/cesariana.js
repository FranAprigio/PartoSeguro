
import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PartoCesariana = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            Histórico:
            Maria, grávida de seu primeiro filho, desenvolve pré-eclâmpsia no terceiro trimestre, com dores abdominais severas e pressão alta.

            Decisão Médica:
            O obstetra decide que uma cesariana é necessária para garantir a segurança de Maria e do bebê.

            Procedimento:
            A cesariana é realizada com sucesso, garantindo um nascimento seguro.

            Recuperação:
            Maria e o bebê se recuperam bem com acompanhamento médico contínuo.

            Consequências:
            A cesariana foi vital para proteger a saúde da mãe e do bebê em caso de pré-eclâmpsia.

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
