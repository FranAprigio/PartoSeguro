import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const ImpericiaProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        A imperícia é a falta de habilidade ou competência por parte de um 
        profissional ao realizar uma determinada tarefa ou procedimento que 
        normalmente seria esperado de alguém com sua formação ou experiência. 
        É um dos elementos que compõem a responsabilidade profissional, juntamente 
        com negligência e imprudência, e pode resultar em consequências adversas 
        para a segurança e o bem-estar das pessoas envolvidas.
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
