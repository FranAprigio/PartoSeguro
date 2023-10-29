import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const EstudoCasosProf = () => {
    const data = [
        { pagina: "Estudo de casos #1", nav: "Estudo1" },
        { pagina: "Estudo de casos #2", nav: "Estudo2" },
    ]


    return (
        <BackgroundComponent>
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