import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const LinksUteisProf = () => {
  const data = [
    {
      pagina: "Como se preparar?",
      nav: "https://semprebem.paguemenos.com.br/posts/saude/5-dicas-de-preparacao-para-o-parto",
    },
  ];

  return (
    <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
      <View style={styles.body}>
        <SearchInput data={data} isOutLink={true} />
      </View>
    </BackgroundComponent>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    marginTop: 70,
  },
});
