import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../components/micros";

export const Paciente  = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("");
  };
  return (
    <S.Container>

    <S.Form>
    <ButtonComponent label={"Conceitos Importantes"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Orientações"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Dúvidas Frequentes"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
    <ButtonComponent label={"Links Úteis"} backgroundColor={'1'} marginT={"10px 0 0 0"} onPress={handleSubmit}/>

    </S.Form>

    </S.Container>
  );
};

