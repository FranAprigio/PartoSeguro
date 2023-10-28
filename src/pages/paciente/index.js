import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackgroundComponent, ButtonComponent } from "../../components/micros";

//Icons imports
import go from '../../assets/icons/arrow-right.png'
import concepts from '../../assets/icons/bxs-layer.png'
import orient from '../../assets/icons/bxs-chat.png'
import faq from '../../assets/icons/question-circle.png'
import links from '../../assets/icons/bx-link-alt.png'


export const Paciente = () => {

  const navigation = useNavigation();

  return (
    <BackgroundComponent>
      <S.Container>
        <S.Form>
          <ButtonComponent icon={concepts} arrow={go} id="mainConcepts" label={"Conceitos Importantes"} onPress={() => { navigation.navigate("ConceitosImportantes"); }} />
          <ButtonComponent icon={orient} arrow={go} id="orientation" label={"Orientações"} onPress={() => { navigation.navigate("Orientacoes"); }} />
          <ButtonComponent icon={faq} arrow={go} id="faq" label={"Dúvidas Frequentes"} onPress={() => { navigation.navigate("Faq"); }} />
          <ButtonComponent icon={links} arrow={go} id="links" label={"Links Úteis"} onPress={() => { navigation.navigate("LinksUteis"); }} />
        </S.Form>
      </S.Container>
    </BackgroundComponent>
  );
};

