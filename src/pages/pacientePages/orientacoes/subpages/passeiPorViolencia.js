import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const PASSEI_POR_VIOLÊNCIA_OBSTÉTRICA_O_QUE_FAZER = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">
                A violência obstétrica por muitas veze é silenciosa, só você sabe identificar como foi o seu pré-parto, parto e pós-parto. O processo de nascimento é único e delicado, se você entende e identifica ter sofrido qualquer tipo de violência obstétrica, esse é o caminho de como denunciar:
                        1.	Fazer uma ouvidoria junto ao hospital; 
                        2.	Fazer uma ouvidoria no SUS através do telefone 136ou pelo site do Ministério Público ou pela Secretaria de Saúde do seu município ou estado;
                        3.	Fazer uma reclamação/notificação junto a ANS, seja pelo telefone 08007019656 (ligação gratuita), pelo formulário no site ou pessoalmente;
                        4.	Fazer uma reclamação no Procon da sua cidade;
                        5.	Disque 180, que é a central de denúncia e busca de ajuda a vítimas de violência contra mulheres;
                        6.	Procurar a delegacia da mulher mais próxima;
                        7.	Procurar a sala de atendimento ao cidadão do Ministério Público.

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