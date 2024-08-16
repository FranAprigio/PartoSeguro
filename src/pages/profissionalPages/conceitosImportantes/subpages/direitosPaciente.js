import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const DireitosPacienteProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        O direito do paciente envolve o 
        conjunto de garantias e prerrogativas
        asseguradas aos indivíduos que buscam 
        atendimento médico e cuidados de saúde.
        Isso inclui o direito à informação, consentimento,
        privacidade, qualidade no tratamento e participação
        ativa nas decisões relacionadas à sua saúde. 
        O objetivo é proteger a dignidade e os interesses 
        do paciente no contexto da assistência médica.
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
