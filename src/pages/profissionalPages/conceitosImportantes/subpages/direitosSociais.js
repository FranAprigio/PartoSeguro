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
            Os direitos sociais da gestante são todos aqueles que
            garantem à mulher atendimento em caixas especiais ou
            prioridades na fila de bancos, supermercados, teatro,
            cinema, etc. O acesso à porta da frente de lotações e
            assento preferencial também são caracterizados como
            direito social.
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
