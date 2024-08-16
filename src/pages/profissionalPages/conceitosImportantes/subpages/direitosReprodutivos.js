import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const DireitosReprodutivos = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}>
      <TextComponent color={"black"}>
       Direito reprodutivo é o conjunto de direitos que envolve a 
       capacidade das pessoas de tomar decisões relacionadas à reprodução 
       de forma livre, informada e sem discriminação. Isso abrange a escolha 
       de ter filhos, o acesso a métodos contraceptivos, o cuidado pré-natal, 
       a assistência ao parto e a decisão sobre interrupção da gravidez, quando 
       legal. Esse conceito visa garantir a autonomia e a dignidade das pessoas 
       em questões reprodutivas.
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
