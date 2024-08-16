import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const EquidadeProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        A equidade refere-se à promoção da justiça e igualdade na
        distribuição de recursos, oportunidades e tratamento, levando
        em consideração as diferenças individuais e as necessidades
        específicas de cada pessoa. Esse princípio busca reduzir as 
        desigualdades e garantir que todos tenham acesso às mesmas
        chances e benefícios, independentemente de sua origem, condição
        social, ou outros fatores que possam gerar discriminação.
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
