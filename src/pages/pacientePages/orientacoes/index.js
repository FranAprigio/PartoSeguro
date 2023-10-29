import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import * as S from "../styles"
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchInput from "../../../components/search";


export const Orientacoes = () => {

    const data = [
        { pagina: "Orientacao1", nav: "orient1" },
        { pagina: "Orientacao2", nav: "orient2" },
    ]

    return (
        <BackgroundComponent>
            <View style={styles.body}>
                <SearchInput data={data} />
                <ScrollView>
                    <S.Container>
                        <Text style={{ margin: 10, fontSize: 20 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Error voluptates dolorum, magni ducimus quis officiis labore,
                            in nesciunt doloribus quibusdam nisi odio ullam, dolores incidunt perferendis
                            placeat cumque ipsam delectus!
                        </Text>
                        <Text style={{ margin: 10, fontSize: 20 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Error voluptates dolorum, magni ducimus quis officiis labore,
                            in nesciunt doloribus quibusdam nisi odio ullam, dolores incidunt perferendis
                            placeat cumque ipsam delectus!
                        </Text>
                    </S.Container>
                </ScrollView>
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