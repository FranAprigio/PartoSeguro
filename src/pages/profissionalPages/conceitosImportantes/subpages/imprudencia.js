import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const ImprudenciaProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        A imprudência se refere à conduta irresponsável ou descuidada, 
        em que alguém age sem a devida cautela ou consideração pelas consequências. 
        Geralmente, isso ocorre quando alguém toma decisões precipitadas ou 
        arriscadas, ignorando normas de segurança ou padrões aceitos. 
        A imprudência pode levar a acidentes, prejuízos ou danos a terceiros e é 
        um elemento importante na análise de responsabilidade civil ou penal.
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
