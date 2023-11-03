import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../../components/search";

export const ConceitosImportantesProf = () => {
  const data = [
    { pagina: "Direitos Sociais", nav: "DireitosSociais" },
    { pagina: "Direitos à Saúde", nav: "DireitosSaude" },
    { pagina: "Direitos do Usuário", nav: "DireitosUsuario" },
    // { pagina: "Direitos do Paciente", nav: "DireitoPaciente" },
    // { pagina: "Direitos Médico", nav: "DireitosMedico" },
    // { pagina: "Universalidade", nav: "Universalidade" },
    // { pagina: "Equidade", nav: "Equidade" },
    // { pagina: "Direito Reprodutivo", nav: "DireitoReprodutivo" },
    // { pagina: "Parto Humanizado", nav: "PartoHumanizado" },
    // { pagina: "Cartão Gestante", nav: "CartaoGestante" },
    // { pagina: "Plano de Parto", nav: "PlanoParto" },
    // { pagina: "Partograma", nav: "Partograma" },
    // { pagina: "Rede Cegonha", nav: "RedeCegonha" },
    // { pagina: "Evidência Científicas", nav: "EvidenciaCientificas" },
    // { pagina: "Violência Obstétrica", nav: "ViolenciaObstetrica" },
    // { pagina: "Negacionismo", nav: "Negacionismo" },
    // { pagina: "Omissão", nav: "Omissao" },
    // { pagina: "Imperícia", nav: "Impericia" },
    // { pagina: "Imprudência", nav: "Imprudencia" },
    // { pagina: "Negligência", nav: "Negligencia" },
  ];

  return (
    <BackgroundComponent colors={["#FCCCD4", "#FCE5BF", "#E3C3B9"]}>
      <View style={styles.body}>
        <SearchInput data={data} />
      </View>
    </BackgroundComponent>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    marginTop: 70,
    marginBottom: 50,
  },
});
