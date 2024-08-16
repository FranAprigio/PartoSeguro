import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const Orientacoes = () => {

    const data = [
        { pagina: "Direitos do Acompanhante", nav: "DireitosAcompanhante" },
        { pagina: "Plano de Parto Legal", nav: "PlanoPartoLegal" },
        { pagina: "Doula", nav: "Doula" },
        { pagina: "Passei por Violência", nav: "PasseiPorViolencia" },
        { pagina: "Práticas Advertidas", nav: "PraticasAdvertidas" },
        { pagina: "Tipos de Violência Obstétrica", nav: "TiposViolenciaObstetrica" },
        { pagina: "Consequências", nav: "Consequencias" },
        { pagina: "Direito ao Conhecimento", nav: "DireitoConhecimento" },
        { pagina: "Vinculação da Maternidade", nav: "VinculacaoDaMaternidade" }
    ];

    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
            <View style={styles.body}>
                <SearchInput data={data} />
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
});
