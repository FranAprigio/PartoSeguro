import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import * as S from "../styles"
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchInput from "../../../components/search";


export const Faq = () => {

    const data = [
        { pagina: "Duvida  #1", nav: "Duvida1" },
        { pagina: "Duvida  #2", nav: "Duvida2" },
        { pagina: "Duvida  #2", nav: "Duvida2" },
        { pagina: "Duvida  #2", nav: "Duvida2" },
        { pagina: "Duvida  #2", nav: "Duvida2" },
        { pagina: "Duvida  #2", nav: "Duvida2" },
    ]

    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
            <View style={styles.body}>
                <SearchInput data={data} />
            </View>
            <S.Container>
                <ScrollView>
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
                    <Text style={{ margin: 10, fontSize: 20 }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Error voluptates dolorum, magni ducimus quis officiis labore,
                        in nesciunt doloribus quibusdam nisi odio ullam, dolores incidunt perferendis
                        placeat cumque ipsam delectus!
                    </Text>
                </ScrollView>
            </S.Container>
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