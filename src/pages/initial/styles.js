import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import lightTheme from "../../theme/light";

export const Container = styled(ImageBackground).attrs({
  source: require("../../assets/initial.png"), 
  resizeMode: "cover",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); 
`;
