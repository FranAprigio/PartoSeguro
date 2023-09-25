import styled from "styled-components/native";
import lightTheme from "../../theme/light";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${lightTheme.colors.primary[1]};
  background-color: #FCCCD4;
`;

export const Form = styled.View`
  width: 100%;
  padding: 16px 0;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
