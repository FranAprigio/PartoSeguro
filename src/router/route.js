import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getHeaderOptions } from "../components/header";
import AuthProvider from "../context/auth";
import {
  Initial, Menu, Profissional, Paciente, Orientacoes, LinksUteis, Faq,
  DuvidasFrequentes, ConceitosImportantes, ConceitosImportantesProf,
  EstudoCasosProf, PraticasAdvertidas, LinksUteisProf, WebPage,
} from "../pages";
import * as PacientePages from "../pages/pacientePages/conceitosImportantes/subpages";
import * as OrientacoesPacientePages from "../pages/pacientePages/orientacoes/subpages";
import * as ProfissionalPages from "../pages/profissionalPages/conceitosImportantes/subpages";

const Stack = createNativeStackNavigator();

const Route = () => {
  const pacientePages = [
    { page: "Paciente", name: "Paciente", componente: Paciente },
    { page: "Duvidas Frequentes", name: "Faq", componente: Faq },
    { page: "Links Uteis", name: "LinksUteis", componente: LinksUteis },
    { page: "Orientações", name: "Orientacoes", componente: Orientacoes },
    { page: "Conceitos Importantes", name: "ConceitosImportantes", componente: ConceitosImportantes },
  ];

  const conceitosImportantesSubPagePaciente = [
    "CartaoGestante", "DicionarioGestacao", "DireitoReprodutivo", "DireitosMedico", "DireitosPaciente",
    "DireitosSaude", "DireitosSociais", "DireitosUsuario", "Equidade", "EvidenciaCientifica", "Impericia",
    "Imprudencia", "Negacionismo", "Negligencia", "Omissao", "Partograma", "PartoHumanizado", "RedeCegonha",
    "Universalidade", "ViolenciaObstetrica", "Doula", "Episiotomia", "ManobraKristeler", "PartoCesariana",
    "PartoVaginal", "Parturiente", "PlanoParto", "PosicaoLitotomia", "Puerperio", "PuxoDirigido", "Tricotomia",
  ].map(name => ({ page: name, name, componente: PacientePages[name] }));

  const OrientacoesSubPage = [
    "TiposViolenciaObstetrica", "Consequencias", "DireitoConhecimento", "DireitosAcompanhante", 
    "PlanoPartoLegal", "PasseiPorViolencia", "PraticasAdvertidasPaciente"
  ].map(name => ({ page: name, name, componente: OrientacoesPacientePages[name] }));

  const profissionalPages = [
    { page: "Profissional", name: "Profissional", componente: Profissional },
    { page: "Conceitos Importantes", name: "ConceitosImportantesProf", componente: ConceitosImportantesProf },
    { page: "Duvidas Frequentes", name: "DuvidasFrequentes", componente: DuvidasFrequentes },
    { page: "Estudo de Casos", name: "EstudoCasosProf", componente: EstudoCasosProf },
    { page: "Práticas Advertidas", name: "PraticasAdvertidas", componente: PraticasAdvertidas },
    { page: "Links Uteis", name: "LinksUteisProf", componente: LinksUteisProf },
    { page: "WebPage", name: "WebPage", componente: WebPage },
  ];

  const conceitosImportantesSubPageProfissional = [
    "CartaoGestanteProf", "DireitosMedicoProf", "DireitosPacienteProf", "DireitosReprodutivosProf",
    "DireitosSaudeProf", "DireitosSociaisProf", "DireitosUsuarioProf", "EquidadeProf", "EvidenciaCientificaProf",
    "ImpericiaProf", "ImprudenciaProf", "NegacionismoProf", "NegligenciaProf", "OmissaoProf", "PartogramaProf",
    "PartoHumanizadoProf", "PlanoPartoProf", "RedeCegonhaProf", "UniversalidadeProf", "ViolenciaObstetricaProf",
  ].map(name => ({ page: name, name, componente: ProfissionalPages[name] }));

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={({ route }) => getHeaderOptions(route)} initialRouteName="Initial">
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="Menu" component={Menu} />

          {pacientePages.concat(conceitosImportantesSubPagePaciente, OrientacoesSubPage)
            .concat(profissionalPages, conceitosImportantesSubPageProfissional)
            .map(({ page, componente }) => (
              <Stack.Screen key={page} name={page} component={componente} />
          ))}
        </Stack.Navigator>
      </AuthProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Route;
