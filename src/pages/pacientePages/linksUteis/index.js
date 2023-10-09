import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import * as S from "../styles"
import { Text } from "react-native";


export const LinksUteis = () => {

    return (
        <BackgroundComponent>
            <S.Container>
                <Text style={{margin: 10, fontSize:20}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Error voluptates dolorum, magni ducimus quis officiis labore, 
                    in nesciunt doloribus quibusdam nisi odio ullam, dolores incidunt perferendis 
                    placeat cumque ipsam delectus!
                </Text>
                <Text style={{margin: 10, fontSize:20}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Error voluptates dolorum, magni ducimus quis officiis labore, 
                    in nesciunt doloribus quibusdam nisi odio ullam, dolores incidunt perferendis 
                    placeat cumque ipsam delectus!
                </Text>
            </S.Container>
        </BackgroundComponent>
    );
};

