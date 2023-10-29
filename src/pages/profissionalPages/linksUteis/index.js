import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const LinksUteisProf = () => {
    const data = [
        { pagina: "Link Prof #1", nav: "https://www.google.com" },
        { pagina: "Link Prof #2", nav: "https://reactnative.dev" },
    ]


    return (
        <BackgroundComponent>
            <View style={styles.body}>
                <SearchInput data={data} isOutLink={true}/>
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