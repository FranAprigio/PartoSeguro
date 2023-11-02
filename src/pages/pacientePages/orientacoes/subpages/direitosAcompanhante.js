import React from 'react';
import { BackgroundComponent, TextComponent } from "../../../../components/micros/index";
import * as S from "../styles"
import { StyleSheet } from "react-native";

export const DireitosAcompanhante = () => {
  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>
          <TextComponent variant="Title1">

            Os direitos dos acompanhantes, também conhecidos como "direitos dos acompanhantes de parto", 
            são uma parte importante dos cuidados de saúde reprodutiva. Eles garantem que as gestantes 
            tenham a opção de ter um ou mais acompanhantes durante o trabalho de parto, parto e pós-parto. 
            Os direitos dos acompanhantes variam de acordo com as leis e políticas de saúde em diferentes 
            regiões, mas incluem geralmente os seguintes aspectos

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
