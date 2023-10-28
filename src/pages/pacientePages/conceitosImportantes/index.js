import React from "react";
import { BackgroundComponent, PinkButtonComponent } from "../../../components/micros";
import { StyleSheet, View, ScrollView, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import searchIcon from '../../../assets/icons/bx-search.png';

export const ConceitosImportantes = () => {
    const navigation = useNavigation();
    return (
        <BackgroundComponent>
            <View style={styles.body}>
                <View style={{position: 'relative'}}>
                    {/* //TODO Make this work */}
                    <TextInput style={styles.search}>placeholder</TextInput>
                    <Image style={styles.icon} source={searchIcon} />
                </View>
                <ScrollView>
                    <PinkButtonComponent btnText="Direitos Sociais" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Direitos à Saúde" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Direitos do Usuário" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Direitos do Paciente" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Direitos do Médico" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Universalidade" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Equidade" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Direito Reprodutivo" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Parto Humanizado" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Cartão Gestante" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Plano de Parto" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Partograma" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Rede Cegonha" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Evidências Científicas" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Violência Obstétrica" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Negacionismo" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Omissão" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Imperícia" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Imprudência" goToPage={() => { navigation.navigate("Orientacoes"); }} />
                    <PinkButtonComponent btnText="Negligência" goToPage={() => { navigation.navigate("Orientacoes"); }} />
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
    },
    search: {
        borderRadius: 30,
        paddingLeft: 40,
        padding: 5,
        backgroundColor: "#D1D5DA",
        marginBottom: 30
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 10
    }
})