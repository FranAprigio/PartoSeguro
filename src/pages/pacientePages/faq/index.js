import React from "react";
import { BackgroundComponent, TextComponent } from "../../../components/micros";
import { StyleSheet } from "react-native";
import SearchInput from "../../../components/search";
import * as S from './styles';


export const Faq = () => {

    // const data = [
    //     { pagina: "Duvida  #1", nav: "Duvida1" },
    //     { pagina: "Duvida  #2", nav: "Duvida2" },
    //     { pagina: "Duvida  #2", nav: "Duvida2" },
    //     { pagina: "Duvida  #2", nav: "Duvida2" },
    //     { pagina: "Duvida  #2", nav: "Duvida2" },
    //     { pagina: "Duvida  #2", nav: "Duvida2" },
    // ]

    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
        <S.Container>
          <S.Form>
            <TextComponent variant="Title1">
  
                O trabalho de parto varia, mas geralmente pode durar de 12 a 18 horas para uma 
                gestante de primeira viagem. Para gestantes que já tiveram filhos, o trabalho 
                de parto pode ser mais curto.
                Quais são as opções de alívio da dor durante o trabalho de parto?

            </TextComponent>
          </S.Form>
        </S.Container>
      </BackgroundComponent>    );
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 0,
        marginTop: 0,
    }
})