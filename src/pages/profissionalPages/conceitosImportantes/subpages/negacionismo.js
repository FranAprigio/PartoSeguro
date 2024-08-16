import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const NegacionismoProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        O negacionismo é a prática de rejeitar ou desconsiderar evidências científicas, 
        fatos ou realidades amplamente aceitas, muitas vezes em favor de crenças pessoais, 
        políticas ou ideológicas. Pode se manifestar em questões como mudanças climáticas, 
        vacinação, saúde pública e outros tópicos, minando a tomada de decisões informadas 
        e a resposta a desafios sociais e científicos.
      </TextComponent>
    </View>
  </BackgroundComponent>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    marginTop: 70,
  },
});
