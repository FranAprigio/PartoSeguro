import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const EvidenciaCientifica = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        Evidências científicas são informações e dados obtidos por meio de 
        pesquisas e estudos rigorosos que seguem métodos científicos. 
        Elas fornecem comprovação confiável e baseiam-se em resultados observáveis 
        e verificáveis, contribuindo para a construção do conhecimento em diversas 
        áreas, como medicina, ciência, tecnologia e muitas outras disciplinas. 
        Essas evidências são essenciais para embasar decisões, políticas e avanços 
        no entendimento da realidade.
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
