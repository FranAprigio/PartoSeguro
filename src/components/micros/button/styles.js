import styled from "styled-components/native";
import lightTheme from "../../../theme/light";

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: ${(props) => props.marginT || "15px"};
  width: 100%;
  border-radius: 30px;
  background-color: ${(props) => props.backgroundColor || lightTheme.colors.primary[2]};
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  color: ${lightTheme.colors.primary[3]};
  font-size: 20px;
  font-weight: ${(props) => (props.weight ? "bold" : "normal")};
`;

export const IconWrapper = styled.View`
  width: 30px;
  align-items: center;
`;

export const IconStyle = styled.Text`
  color: ${lightTheme.colors.primary[3]};
`;

