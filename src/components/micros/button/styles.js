import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Button = styled.TouchableOpacity`
color: #fff;
   
`;
export const Text = styled.Text`
  color: #6c0434;
  font-size: 16px;
  margin-right: 7px;

`;
export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.marginT || "0"};
  background-color: ${props=>  lightTheme.colors.primary[props.backgroundColor]};
  border-radius: 50px;
  flex-direction: row;
  height: 40px;  
  width: 80%;
`;
