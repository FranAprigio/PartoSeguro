import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackgroundComponent, ButtonComponent } from "../../components/micros";
import { View, Text } from 'react-native'

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
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: "rgba(252, 229, 191, .5)" }}>
        <S.Form>
          <S.Text style={{ margin: 0, textAlign: "center", color: "#6C0434", fontWeight: "300", lineHeight: 65 }}>
            Bem vindo(a) ao{"\n"}
            <S.Text style={{ margin: 0, color: "#6C0434", fontWeight: "bold" }}>
              Parto Seguro
            </S.Text>
          </S.Text>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
              <BackgroundComponent flexStyle='null' isOpacity="true">

                <View style={{ paddingTop: 50, paddingBottom: 50 }}>
                  <ButtonComponent
                    label={"Profissional da Saúde"}
                    backgroundColor={"rgba(252, 229, 191, 0.4)"}
                    onPress={handleSubmit1}
                    marginT={"15px"}
                    weight={true}
                    flexStyle={"null"}
                  />

                  <ButtonComponent
                    weight={true}
                    label={"Paciente"}
                    marginT={"15px"}
                    backgroundColor={"rgba(252, 229, 191, 0.4)"}
                    onPress={handleSubmit2}
                    flexStyle={"null"}
                  />
                </View>

              </BackgroundComponent>
            </View>
          </View>
          <Text>{/* Necessary tag for vertical align */}</Text> 
        </S.Form>
      </View>
    </S.Container>
  );
};
