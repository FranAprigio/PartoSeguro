import {
  BackgroundComponent,
  TextComponent,
} from "../../../../components/micros";
import { StyleSheet, View } from "react-native";

export const DiferencaParto = () => {
  <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
    <View style={styles.body}></View>
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
