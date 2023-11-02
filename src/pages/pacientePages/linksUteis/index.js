import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { View, StyleSheet } from "react-native";
import SearchInput from "../../../components/search";


export const LinksUteis = () => {
    const data = [
        { pagina: "Cartilha Parto Seguro", nav: "http://www.mpgo.mp.br/portal/conteudo/cartilha-parto-seguro" },
        { pagina: "Violência Obstétrica não se cale", nav: "https://www.naosecale.ms.gov.br/violencia-obstetrica/" },
    ]
    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
            <View style={styles.body}>
                <SearchInput data={data} isOutLink={true} />
            </View>
        </BackgroundComponent>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 30,
        marginTop: 70,
    }
})