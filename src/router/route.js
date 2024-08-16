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
import { Ocitocina, PosicoesInadequadas } from "../pages/profissionalPages/praticasAdvertidas/subpages";
import { ComoPreparar, DiferencaParto } from "../pages/profissionalPages/duvidasFrequentes/subpages";
import {
  PartoCesariana,
  PartoDomiciliar,
} from "../pages/profissionalPages/estudoCasosProf/subPages";

const Stack = createNativeStackNavigator();

const Route = () => {
  const pacientePages = [
    { page: "Conceitos Importantes Paciente", name: "ConceitosImportantesPaciente", componente: ConceitosImportantes },
    { page: "Paciente", name: "Paciente", componente: Paciente },
    { page: "Duvidas Frequentes Paciente", name: "Faq", componente: Faq },
    { page: "Links Uteis Paciente", name: "LinksUteis", componente: LinksUteis },
    { page: "Orientações", name: "Orientacoes", componente: Orientacoes },
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
    { page: "Conceitos Importantes Profissional", name: "ConceitosImportantesProf", componente: ConceitosImportantesProf },
    { page: "Duvidas Frequentes Profissional", name: "DuvidasFrequentes", componente: DuvidasFrequentes },
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


  const praticasAdvertidasSubPage = [
    {
      page: "Ocitocina Sintética",
      name: "Ocitocina",
      componente: Ocitocina,
    },
    {
      page: "Posições Inadequadas",
      name: "PosicoesInadequadas",
      componente: PosicoesInadequadas,
    },
  ];

  const duvidasFrequentesSubPages = [
    {
      page: "Como se preparar?",
      name: "ComoPreparar",
      componente: ComoPreparar,
    },
    {
      page: "Diferença de Parto?",
      name: "DiferencaParto",
      componente: DiferencaParto,
    },
  ];

  const estudoCasoSubPage = [
    {
      page: "Cesariana",
      name: "Cesariana",
      componente: PartoCesariana,
    },
    {
      page: "Parto Domiciliar",
      name: "PartoDomiciliar",
      componente: PartoDomiciliar,
    },
  ];


  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={({ route }) => getHeaderOptions(route)} initialRouteName="Initial">
          <Stack.Screen name="Initial" options={{ headerShown: false }} component={Initial} />
          <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />

          {/* Paginas do paciente */}
          {pacientePages.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}

          {conceitosImportantesSubPagePaciente.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))} 

          {OrientacoesSubPage.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}

          {/* Paginas do profissional de saude */}
          {profissionalPages.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}
          {conceitosImportantesSubPageProfissional.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}
          {estudoCasoSubPage.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}
          {praticasAdvertidasSubPage.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}
          {duvidasFrequentesSubPages.map((item, index) => (
            <Stack.Screen
              key={index}
              style={{ flex: 1, justifyContent: "space-between" }}
              name={item.name}
              component={item.componente}
              options={({ navigation }) =>
                getHeaderOptions(item.page, navigation)
              }
            />
          ))}
        </Stack.Navigator>
      </AuthProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Route;
