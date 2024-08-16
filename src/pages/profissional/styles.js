import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.View`
  width: 90%;
  justify-content: space-around;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #FCCCD4;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  width: 100%;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;
