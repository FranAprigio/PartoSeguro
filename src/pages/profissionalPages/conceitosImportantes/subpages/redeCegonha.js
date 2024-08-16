import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const RedeCegonha = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        A Rede Cegonha é uma iniciativa do sistema de saúde do Brasil que 
        visa melhorar a qualidade do atendimento à saúde materno-infantil. 
        Ela enfatiza a assistência integral à gestante e ao recém-nascido, 
        com foco na prevenção, promoção e atenção humanizada durante a gravidez, 
        parto e pós-parto. A Rede Cegonha busca garantir o acesso universal e 
        igualitário aos serviços de saúde nesse contexto, promovendo a saúde da 
        mãe e do bebê.
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
