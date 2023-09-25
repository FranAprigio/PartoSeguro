import * as S from "./styles";

export const TextComponent = ({ color, variant, marginT, children }) => {
  return <S.Text variant={variant} marginT={marginT}  color={color}>{children}</S.Text>;
};
