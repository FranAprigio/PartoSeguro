import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../components/micros";

export const Menu = () => {
  const navigation = useNavigation();

  const handleSubmit1 = () => {
    navigation.navigate("Profissional");
  };
  const handleSubmit2 = () => {
    navigation.navigate("Paciente");
  };
  return (
    <S.Container>
      <S.Form>
      <S.Text>Bem vindo (a) ao Parto Seguro</S.Text>
      <ButtonComponent
        label={"Profissional da Saúde"}
        backgroundColor={"1"}
        marginT={"10px 0 0 0"}
        onPress={handleSubmit1}
        />
        <ButtonComponent
        label={"Paciente"}
        backgroundColor={"1"}
        marginT={"10px 0 0 0"}
        onPress={handleSubmit2}
        />
        </S.Form>

    </S.Container>
  );
};
