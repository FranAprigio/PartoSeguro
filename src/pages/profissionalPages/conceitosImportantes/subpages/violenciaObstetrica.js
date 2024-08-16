import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const ViolenciaObstetrica = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        A violência obstétrica caracteriza-se pelas ações ou omissões, 
        por parte de profissionais de saúde, que desrespeitam os direitos 
        e a dignidade das mulheres durante o pré-parto, parto e o pós-parto, 
        causando perda da autonomia e capacidade de decidir livremente sobre 
        seus corpos e sexualidade. Isso pode incluir procedimentos invasivos 
        não consentidos, tratamento desrespeitoso, discriminação, abuso de 
        medicalização, patologização de processos naturais, humilhação ou 
        qualquer forma de abuso durante o processo de assistência ao processo 
        de nascimento.
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
