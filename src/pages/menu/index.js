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
            <S.Text style={{fontWeight: "bold" }}>Parto Seguro</S.Text>
          </S.Text>

          <ButtonComponent
            label={"Profissional da Saúde"}
            //backgroundColor={"rgba(252, 229, 191, 0.4)"}
            onPress={handleSubmit1}
            marginT={"15px"}
            weight={true}
            flexStyle={"null"}
            style={{ paddingTop: 50, paddingBottom: 50 }}
          />

          <ButtonComponent
            label={"Paciente"}
            //backgroundColor={"rgba(252, 229, 191, 0.4)"}
            onPress={handleSubmit2}
            marginT={"15px"}
            weight={true}
            flexStyle={"null"}
          />
        </S.Form>
      </S.Container>


    </BackgroundComponent>
  );
};

