import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/micros";
import { ButtonComponent } from "../../components/micros";

export const Profissional  = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("");
  };
  return (
    <S.Container>

    <S.Form>
    <ButtonComponent label={"Estudo de Casos"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Conceitos Importantes"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Práticas Advertidas"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Dúvidas Frequentes"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Links Úteis"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>

    </S.Form>

    </S.Container>
  );
};

