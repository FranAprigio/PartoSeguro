import styled from "styled-components/native";
import { ImageBackground } from 'react-native';
import lightTheme from "../../theme/light";

export const Container = styled(ImageBackground).attrs({
  source: require('../../assets/background.png'), 
  opacity: 0.4
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(252, 204, 212, 0.5);
`;

export const Text = styled.Text`
  font-size: ${lightTheme.fontSizes[40]};
  color: ${lightTheme.colors.primary[3]};
  text-align: center;
  margin-bottom: 20px;
`;

export const BoldText = styled(Text)`
  font-weight: bold;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 20px;
  align-items: center;
`;
