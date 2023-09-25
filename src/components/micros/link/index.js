import * as S from "./styles";
import { Text } from "react-native";
export const LinkComponent = ({ onPress, link, textBefore }) => {
  return (
    <S.Container>
      {textBefore && <Text>{textBefore}</Text>}
      <S.Button onPress={onPress}>
        <S.Text link={true}>{link}</S.Text>
      </S.Button>
    </S.Container>
  );
};
