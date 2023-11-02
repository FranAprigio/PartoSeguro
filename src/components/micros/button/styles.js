import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  margin-top: 50;   
  width: 290;
  border-radius: 30px;
  background-color: ${(props) => props.backgroundColor || lightTheme.colors.primary[2]};
`;

export const Text = styled.Text`
  color: ${(props) => props.color || lightTheme.colors.primary[3]};
  font-size: 20px;
  margin: 15px;
`;

export const Container = styled.View`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  margin: ${(props) => props.marginT || "0"};
  border-radius: 30px;
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor === "1"
      ? lightTheme.colors.primary[props.backgroundColor]
      : props.backgroundColor};
`;

export const ContainerNoFlex = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

export const genContainer = styled.View`
  margin-left: 10%;
`;

export const genContainerNoMargin = styled.View`
  margin-left: 0%;
`;

export const Icon = styled.View`
`;

export const View = styled.View`
  height: 100%;
`;