import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const PartogramaProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        O partograma é uma ferramenta gráfica usada durante o trabalho de 
        parto para monitorar o progresso da dilatação cervical e outras variáveis 
        maternas e fetais, como frequência cardíaca do bebê e contrações uterinas. 
        Ele ajuda os profissionais de saúde a identificar problemas precocemente e 
        tomar decisões informadas, garantindo a segurança da mãe e do bebê durante o 
        parto.
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
