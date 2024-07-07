import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const CartaoGestante = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
        O cartão gestante é um documento que acompanha a gestante durante o 
        pré-natal e contém informações relevantes sobre sua gravidez, exames, 
        vacinações, histórico médico e outras orientações. É uma ferramenta 
        importante para o acompanhamento da saúde da gestante e do bebê, facilitando 
        a comunicação entre a mulher grávida, os profissionais de saúde e a garantia 
        de cuidados adequados.
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
