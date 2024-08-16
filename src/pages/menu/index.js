import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent, BackgroundComponent } from "../../components/micros";

export const Menu = () => {
  const navigation = useNavigation();

  const handleSubmit1 = () => {
    navigation.navigate("Profissional");
  };

  const handleSubmit2 = () => {
    navigation.navigate("Paciente");
  };

  return (
    <BackgroundComponent>
      <S.Container>
        <S.Form>
          <S.Text style={{ margin: 0, textAlign: "center", fontWeight: "300", lineHeight: 65 }}>
            Bem vindo(a) ao{"\n"}
            <S.BoldText>Parto Seguro</S.BoldText>
          </S.Text>

          <S.ButtonWrapper>
            <ButtonComponent
              label={"Profissional da Saúde"}
              onPress={handleSubmit1}
              marginT={"15px"}
              weight={true}
              style={{ paddingTop: 20, paddingBottom: 20 }}
            />

            <ButtonComponent
              label={"Paciente"}
              onPress={handleSubmit2}
              marginT={"15px"}
              weight={true}
              style={{ paddingTop: 20, paddingBottom: 20 }}
            />
          </S.ButtonWrapper>
        </S.Form>
      </S.Container>
    </BackgroundComponent>
  );
};
