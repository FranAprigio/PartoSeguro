import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { ScrollView, StyleSheet } from "react-native";

export const PosicoesInadequadas = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>

      <ScrollView style={styles.scrollView}>
        <S.Form>
          <TextComponent variant="Title1">

          Posições inadequadas durante o trabalho de parto e parto podem ter sérias consequências para a mãe e o bebê. Aqui estão alguns exemplos de posições inadequadas e suas potenciais complicações:

Decúbito Dorsal (Deitada de Costas): Ter a gestante deitada de costas com as pernas levantadas, embora seja uma posição comum para exames médicos e monitoramento fetal, não é a posição mais favorável para o trabalho de parto. Isso pode comprimir a veia cava inferior e reduzir o fluxo sanguíneo para o útero, o que pode diminuir o suprimento de oxigênio para o feto.

Posições de Péssima Expulsão: Posições que não permitem que a mãe empurre eficazmente durante a segunda fase do trabalho de parto podem prolongar o parto e levar à exaustão da mãe.

          </TextComponent>
        </S.Form>
        </ScrollView>
      </S.Container>
    </BackgroundComponent>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    padding: 0,
    marginTop: 70,
  },
  scrollView: {
    
    
  },
});
