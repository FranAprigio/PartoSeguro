import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const UniversalidadeProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
      Universalidade é um princípio dos sistemas de saúde que implica
      que todos os cidadãos têm direito ao acesso igualitário e abrangente
      aos serviços de saúde, independentemente de sua condição financeira,
      social ou geográfica. Isso visa garantir que ninguém seja excluído
      da assistência médica necessária, promovendo a equidade e a justiça
      no acesso aos cuidados de saúde.
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
