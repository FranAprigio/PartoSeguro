import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthProvider from "../context/auth";
import { Profissional, Menu, Initial, Paciente, Orientacoes, ConceitosImportantes, LinksUteis, Faq } from "../pages";
import { getHeaderOptions } from "../components/header";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Initial"
            options={{
              headerShown: false,
            }}
            component={Initial}
          />

          <Stack.Screen
            name="Menu"
            options={{
              headerShown: false,
            }}
            component={Menu}
          />

          <Stack.Screen
            name="Profissional"
            component={Profissional}
            options={({ navigation }) => getHeaderOptions("Profissional da Saúde", navigation)}
          />

          <Stack.Screen
            name="Paciente"
            component={Paciente}
            options={({ navigation }) => getHeaderOptions("Paciente", navigation)}
          />

          <Stack.Screen
            style={{ flex: 1, justifyContent: "space-between" }}
            name="Orientacoes"
            component={Orientacoes}
            options={({ navigation }) => getHeaderOptions("Orientações", navigation)}
          />

          <Stack.Screen
            style={{ flex: 1, justifyContent: "space-between" }}
            name="ConceitosImportantes"
            component={ConceitosImportantes}
            options={({ navigation }) => getHeaderOptions("Conceitos Importantes", navigation)}
          />

          <Stack.Screen
            style={{ flex: 1, justifyContent: "space-between" }}
            name="LinksUteis"
            component={LinksUteis}
            options={({ navigation }) => getHeaderOptions("Links Úteis", navigation)}
          />

          <Stack.Screen
            style={{ flex: 1, justifyContent: "space-between" }}
            name="Faq"
            component={Faq}
            options={({ navigation }) => getHeaderOptions("Dúvidas Frequentes", navigation)}
          />

        </Stack.Navigator>
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Route;
