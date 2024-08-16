import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PraticasAdvertidasPaciente = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
                •	AMARRAR GESTANTE
                •	APERTAR A BARRIGA DA GESTANTE
                •	EPISIOTOMIA
                •	INVASÃO DE INTIMIDADE
                •	EXPOSIÇÃO DO CORPO
                •	FALTA DE ATENÇÃO
                •	TOQUES EXCESSIVOS E/OU COM VIOLÊNCIA
                •	SOLIDÃO E ISOLAMENTO
                •   POSIÇÃO LITOTOMIA - POSIÇÃO GINECOLÓGICA IMOBILIZADA
                •	TRICOTOMIA
                •	PUXO DIRIGIDO
                •	MANOBRA DE KRISTELLER

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