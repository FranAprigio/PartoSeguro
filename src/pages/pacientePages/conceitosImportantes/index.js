import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const ConceitosImportantes = () => {

    const data = [
        { pagina: "Direitos Reprodutivos", nav: "DireitoReprodutivo" },
        { pagina: "Cartão Gestante", nav: "CartaoGestante" },
        { pagina: "Violência Obstétrica", nav: "ViolenciaObstetrica" },
        { pagina: "Direitos Médicos", nav: "DireitosMedico" },
        { pagina: "Direitos do Paciente", nav: "DireitosPaciente" },
        { pagina: "Direitos à Saúde", nav: "DireitosSaude" },
        { pagina: "Direitos Sociais", nav: "DireitosSociais" },
        { pagina: "Direitos do Usuário", nav: "DireitosUsuario" },
        { pagina: "Equidade", nav: "Equidade" },
        { pagina: "Evidências Científicas", nav: "EvidenciaCientifica" },
        { pagina: "Imperícia", nav: "Impericia" },
        { pagina: "Imprudência", nav: "Imprudencia" },
        { pagina: "Negacionismo", nav: "Negacionismo" },
        { pagina: "Negligência", nav: "Negligencia" },
        { pagina: "Omissão", nav: "Omissao" },
        { pagina: "Partograma", nav: "Partograma" },
        { pagina: "Parto Humanizado", nav: "PartoHumanizado" },
        { pagina: "Rede Cegonha", nav: "RedeCegonha" },
        { pagina: "Universalidade", nav: "Universalidade" },
        { pagina: "Doula", nav: "Doula" },
        { pagina: "Episiotomia", nav: "Episiotomia" },
        { pagina: "Manobra de Kristeller", nav: "ManobraKristeler" },
        { pagina: "Parto Cesariana", nav: "PartoCesariana" },
        { pagina: "Parto Vaginal", nav: "PartoVaginal" },
        { pagina: "Parturiente", nav: "Parturiente" },
        { pagina: "Plano de Parto", nav: "PlanoParto" },
        { pagina: "Posição de Litotomia", nav: "PosicaoLitotomia" },
        { pagina: "Puerpério", nav: "Puerperio" },
        { pagina: "Puxo Dirigido", nav: "PuxoDirigido" },
        { pagina: "Tricotomia", nav: "Tricotomia" },
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
