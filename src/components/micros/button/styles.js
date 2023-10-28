import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Button = styled.TouchableOpacity`
  color: #fff;
  padding: 30px;
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
  background-color: ${(props) =>
    props.backgroundColor === "1"
      ? lightTheme.colors.primary[props.backgroundColor] // Defina a cor amarela
      : props.backgroundColor};
  border-radius: 30px;
  flex-direction: row;
  width: 80%;
`;
