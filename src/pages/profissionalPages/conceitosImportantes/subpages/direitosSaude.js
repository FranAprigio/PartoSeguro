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
            Para que a mulher gestante garanta os seus direitos
            trabalhistas ela deve, em primeiro lugar, de acordo com
            o art. 392, parágrafo 1º da CLT (Consolidação das Leis
            do Trabalho) solicitar uma declaração de
            comparecimento junto ao serviço de saúde,
            justificando a falta no trabalho. Isso deve ser feito em
            todas as consultas do pré-natal.

            A gestante também tem o direito de mudar de função
            ou setor no seu trabalho.
            Enquanto estiver grávida e até cinco meses após o
            parto é assegurado à mulher estabilidade no emprego,
            o que significa que ela não pode ser mandada embora
            do trabalho (art. 391 da CLT).
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
