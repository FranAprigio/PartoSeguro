import styled from "styled-components/native";
import { ImageBackground } from 'react-native';
import lightTheme from "../../theme/light";

export const Container = styled(ImageBackground).attrs({
  source: require('../../assets/background.png'), 
})`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(252, 204, 212, 0.5);
`;

export const Text = styled.Text`
  fontSize: ${lightTheme.fontSizes[40]}

`;
export const Form = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex:1;
  justify-content: space-around;
`;
