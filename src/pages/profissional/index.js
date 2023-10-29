import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackgroundComponent, ButtonComponent } from "../../components/micros";

//Icons imports
import go from '../../assets/icons/arrow-right.png'
import concepts from '../../assets/icons/bxs-layer.png'
import faq from '../../assets/icons/question-circle.png'
import links from '../../assets/icons/bx-link-alt.png'
import book from '../../assets/icons/bx-book-bookmark.png'
import dont from '../../assets/icons/bx-comment-x.png'

export const Profissional = () => {
  const navigation = useNavigation();

  return (
    <BackgroundComponent>
      <S.Container>
        <S.Form>
          <ButtonComponent icon={book} arrow={go} label={"Estudo de Casos"} marginT={"10px 0 0 0"} 
            onPress={() => { navigation.navigate("EstudoCasosProf") }} />
          <ButtonComponent icon={concepts} arrow={go} id="mainConcepts" label={"Conceitos Importantes"} 
            onPress={() => { navigation.navigate("ConceitosImportantesProf"); }} />
          <ButtonComponent icon={dont} arrow={go} label={"Práticas Advertidas"} marginT={"10px 0 0 0"} 
            onPress={() => { navigation.navigate("PraticasAdvertidas") }} />
          <ButtonComponent icon={faq} arrow={go} id="faq" label={"Dúvidas Frequentes"} 
            onPress={() => { navigation.navigate("DuvidasFrequentes"); }} />
          <ButtonComponent icon={links} arrow={go} id="links" label={"Links Úteis"} 
            onPress={() => { navigation.navigate("LinksUteisProf"); }} />
        </S.Form>
      </S.Container>
    </BackgroundComponent>

  );
};

