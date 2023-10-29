import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const PraticasAdvertidas = () => {
    const data = [
        { pagina: "Praticas #1", nav: "Praticas1" },
        { pagina: "Praticas #2", nav: "Praticas2" },
    ]


    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
            <View style={styles.body}>
                <SearchInput data={data} />
            </View>
        </BackgroundComponent>
    );
}



const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 30,
        marginTop: 70,
    }    
})