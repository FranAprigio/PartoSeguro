import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const PartoHumanizadoProf = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        O parto humanizado é uma abordagem que prioriza o respeito aos 
        direitos e às escolhas da gestante, oferecendo um ambiente acolhedor 
        e atenção personalizada durante o trabalho de parto e o nascimento. 
        Essa abordagem busca minimizar intervenções médicas desnecessárias e 
        valoriza a participação ativa da mulher no processo, visando uma experiência 
        mais natural, respeitosa e empoderadora.
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
