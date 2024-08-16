import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const DireitosMedicoProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        O direito médico é um ramo do direito que trata das questões 
        legais relacionadas à prática da medicina e à relação entre 
        médicos, pacientes e instituições de saúde. Envolve aspectos
        como responsabilidade médica, ética profissional, consentimento
        informado, padrões de cuidados e regulamentações na área da saúde.
        O objetivo é garantir que os direitos e deveres de todas as partes 
        envolvidas sejam respeitados.
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
