import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const Negligencia = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        A negligência é a falha em cumprir um dever ou obrigação, resultando 
        em danos, prejuízos ou lesões a terceiros. Ela ocorre quando alguém 
        não age com o cuidado razoável que se esperaria em determinada situação. 
        A negligência pode ser considerada um ato de omissão ou falta de atenção 
        devida, e é um conceito importante em questões legais, como responsabilidade 
        civil.
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
