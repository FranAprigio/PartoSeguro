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
  WebPage
} from "../pages";


const Stack = createNativeStackNavigator();

const Route = () => {

  const pacientePages = [
    {
      page: "Paciente",
      name: "Paciente",
      componente: Paciente
    },
    {
      page: "Duvidas Frequentes",
      name: "Faq",
      componente: Faq
    },
    {
      page: "Links Uteis",
      name: "LinksUteis",
      componente: LinksUteis
    },
    {
      page: "Orientações",
      name: "Orientacoes",
      componente: Orientacoes
    },
    {
      page: "Conceitos Importantes",
      name: "ConceitosImportantes",
      componente: ConceitosImportantes
    }
  ];

  const profissionalPages = [
    {
      page: "Profissional",
      name: "Profissional",
      componente: Profissional
    },
    {
      page: "Conceitos Importantes",
      name: "ConceitosImportantesProf",
      componente: ConceitosImportantesProf
    },
    {
      page: "Duvidas Frequentes",
      name: "DuvidasFrequentes",
      componente: DuvidasFrequentes
    },
    {
      page: "Estudo de Casos",
      name: "EstudoCasosProf",
      componente: EstudoCasosProf
    },
    {
      page: "Links Uteis",
      name: "LinksUteisProf",
      componente: LinksUteisProf
    },
    {
      page: "Práticas Advertidas",
      name: "PraticasAdvertidas",
      componente: PraticasAdvertidas
    },
  ];


  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>

          <Stack.Screen name="Initial" options={{ headerShown: false }} component={Initial} />
          <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
          <Stack.Screen name="WebPage" options={{ headerShown: false }} component={WebPage} />

          {/* Paginas do paciente */}
          {pacientePages.map((item, index) => (
            <Stack.Screen key={index}
              style={{ flex: 1, justifyContent: "space-between" }} name={item.name} component={item.componente}
              options={({ navigation }) => getHeaderOptions(item.page, navigation)}
            />
          ))}


          {/* Paginas do profissional de saude */}
          {profissionalPages.map((item, index) => (
            <Stack.Screen key={index}
              style={{ flex: 1, justifyContent: "space-between" }} name={item.name} component={item.componente}
              options={({ navigation }) => getHeaderOptions(item.page, navigation)}
            />
          ))}


        </Stack.Navigator>
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Route;
