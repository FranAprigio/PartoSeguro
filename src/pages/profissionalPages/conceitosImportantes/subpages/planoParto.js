import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const PlanoParto = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        Um plano de parto é um documento escrito em que a gestante ou casal 
        expressa suas preferências e desejos em relação ao parto. 
        Inclui informações sobre o ambiente desejado, intervenções médicas, 
        posições de parto, e outros aspectos para personalizar a experiência 
        de acordo com as escolhas da mulher, promovendo o respeito às suas 
        preferências durante o trabalho de parto e o nascimento.
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
