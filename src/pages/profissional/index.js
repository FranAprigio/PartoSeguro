import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackgroundComponent, ButtonComponent } from "../../components/micros";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal, Text, TouchableOpacity } from 'react-native';  // Importando corretamente o Modal

export const Profissional = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true); // Estado para controlar a visibilidade do modal

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Exibe o modal quando a tela é carregada
    setModalVisible(true);
  }, []);

  return (
    <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
      <S.Container>
        
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <S.ModalContainer>
            <S.ModalContent>
              <S.CloseButton onPress={closeModal}>
                <Icon name="times" size={20} color="#000" />
              </S.CloseButton>
              <S.ModalText>
                Para você profissional da saúde, saiba mais sobre violência obstétrica e multiplique a humanização no atendimento obstétrico.
              </S.ModalText>
              <S.ModalButton onPress={closeModal}>
                <Text style={{ color: '#FFF' }}>Certo!</Text>
              </S.ModalButton>
            </S.ModalContent>
          </S.ModalContainer>
        </Modal>

        {/* Formulário com Botões */}
        <S.Form>
          <ButtonComponent
            onPress={() => { navigation.navigate("ConceitosImportantesProf"); }}
            id="mainConcepts"
            label="Conceitos Importantes"
            weight={true}
            icon={<Icon name="database" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("EstudoCasosProf") }}
            id="estudocaso"
            label="Estudo de Casos"
            weight={true}
            icon={<Icon name="bookmark" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("PraticasAdvertidas") }}
            id="praticas"
            label="Práticas Advertidas"
            weight={true}
            icon={<Icon name="exclamation-triangle" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("DuvidasFrequentes"); }} 
            id="faq"
            label="Dúvidas Frequentes"
            weight={true}
            icon={<Icon name="question-circle" size={30} />}
            arrow={<Icon name="caret-right" size={30} />}
          />

          <ButtonComponent
            onPress={() => { navigation.navigate("LinksUteisProf"); }}
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
