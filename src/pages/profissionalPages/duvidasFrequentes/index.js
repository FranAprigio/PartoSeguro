import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const DuvidasFrequentes = () => {
    const data = [
        { pagina: "Duvida #1", nav: "DireitosSociais" },
        { pagina: "Duvida #2", nav: "DireitosSaude" }
    ]


    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
            <View style={styles.body}>
                <SearchInput data={data} />
            </View>
        </BackgroundComponent>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 30,
        marginTop: 70,
    }
})