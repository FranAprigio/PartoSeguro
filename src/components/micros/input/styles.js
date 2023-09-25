import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Container = styled.View`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 38px;
  right: 133px;
`;
export const Label = styled.Text`
  color: #000;
  font-size: 15px;
  width: 100%;
  margin-bottom: 7px;
`;

export const Input = styled.TextInput`
  color: #000;
  width: 100%;
  border-radius: 10px;
  height: 50px;
  padding: 10px 10px 10px 45px;
  background-color: ${lightTheme.colors.neutras[2]};

  letter-spacing: 1px;
  border: ${(props) =>
    props.showError ? "1px solid #c60d00" : "1px solid #fff"};
`;
export const Button = styled.TouchableOpacity``;
