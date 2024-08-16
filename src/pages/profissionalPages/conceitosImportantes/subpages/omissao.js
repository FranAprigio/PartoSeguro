import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const OmissaoProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        Omissão refere-se à ação de não fazer algo que é esperado ou necessário. 
        Isso pode incluir a não execução de um dever, a negligência em cumprir 
        uma obrigação ou a falta de intervenção quando a ação é vital. A omissão 
        pode ter implicações legais e éticas, especialmente em situações em que 
        há responsabilidades claras a cumprir.
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
