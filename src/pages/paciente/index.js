import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackgroundComponent, ButtonComponent } from "../../components/micros";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Paciente = () => {
  const navigation = useNavigation();

  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        <S.Form>

          <ButtonComponent
            onPress={() => { navigation.navigate("ConceitosImportantes"); }}
            id="mainConcepts"
            label="Conceitos Importantes"
            weight={true}
            icon={<Icon name="database" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("Orientacoes"); }}
            id="orientation"
            label="Orientações"
            weight={true}
            icon={<Icon name="info-circle" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("Faq"); }}
            id="faq"
            label="Dúvidas Frequentes"
            weight={true}
            icon={<Icon name="question-circle" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("LinksUteis"); }}
            id="links"
            label="Links Úteis"
            weight={true}
            icon={<Icon name="external-link-square" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

        </S.Form>

      </S.Container>
    </BackgroundComponent>
  );
};

