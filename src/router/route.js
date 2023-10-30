import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getHeaderOptions } from "../components/header";
import AuthProvider from "../context/auth";
import {
  Profissional,
  Menu,
  Initial,
  Paciente,
  Orientacoes,
  LinksUteis,
  Faq,
  DuvidasFrequentes,
  EstudoCasosProf,
  ConceitosImportantes,
  PraticasAdvertidas,
  ConceitosImportantesProf,
  LinksUteisProf,
  WebPage,
} from "../pages";
import {
  DireitosSociais,
  CartaoGestante,
  DireitosSaude,
} from "../pages/profissionalPages/conceitosImportantes/subpages/index";
import {
  PartoCesariana,
  PartoDomiciliar,
} from "../pages/profissionalPages/estudoCasosProf/subPages";
import {
  Ocitocina,
  PosicoesInadequadas,
} from "../pages/profissionalPages/praticasAdvertidas/subpages";
import {
  ComoPreparar,
  DiferencaParto,
} from "../pages/profissionalPages/duvidasFrequentes/subpages";

const Stack = createNativeStackNavigator();

const Route = () => {
  const pacientePages = [
    {
      page: "Paciente",
      name: "Paciente",
      componente: Paciente,
    },
    {
      page: "Duvidas Frequentes",
      name: "Faq",
      componente: Faq,
    },
    {
      page: "Links Uteis",
      name: "LinksUteis",
      componente: LinksUteis,
    },
    {
      page: "Orientações",
      name: "Orientacoes",
      componente: Orientacoes,
    },
    {
      page: "Conceitos Importantes",
      name: "ConceitosImportantes",
      componente: ConceitosImportantes,
    },
  ];

  const profissionalPages = [
    {
      page: "Profissional",
      name: "Profissional",
      componente: Profissional,
    },
    {
      page: "Conceitos Importantes",
      name: "ConceitosImportantesProf",
      componente: ConceitosImportantesProf,
    },
    {
      page: "Duvidas Frequentes",
      name: "DuvidasFrequentes",
      componente: DuvidasFrequentes,
    },
    {
      page: "Estudo de Casos",
      name: "EstudoCasosProf",
      componente: EstudoCasosProf,
    },
    {
      page: "Links Uteis",
      name: "LinksUteisProf",
      componente: LinksUteisProf,
    },
    {
      page: "Práticas Advertidas",
      name: "PraticasAdvertidas",
      componente: PraticasAdvertidas,
    },
  ];

  const conceitosImportantesSubPage = [
    {
      page: "Direitos Sociais",
      name: "DireitosSociais",
      componente: DireitosSociais,
    },
    {
      page: "Direitos Saúde",
      name: "DireitosSaude",
      componente: DireitosSaude,
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

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Initial"
            options={{ headerShown: false }}
            component={Initial}
          />
          <Stack.Screen
            name="Menu"
            options={{ headerShown: false }}
            component={Menu}
          />
          <Stack.Screen
            name="WebPage"
            options={{ headerShown: false }}
            component={WebPage}
          />

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
          {conceitosImportantesSubPage.map((item, index) => (
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
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Route;
