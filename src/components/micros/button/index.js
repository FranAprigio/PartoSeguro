import React from "react";
import * as S from "./styles";

export const ButtonComponent = ({ onPress, label, backgroundColor, marginT, icon, arrow, flexStyle, weight }) => {
  return (
    <S.Button backgroundColor={backgroundColor} marginT={marginT} onPress={onPress}>
      {icon && <S.IconWrapper>{React.cloneElement(icon, { style: S.IconStyle })}</S.IconWrapper>}
      <S.Text weight={weight}>{label}</S.Text>
      {arrow && <S.IconWrapper>{React.cloneElement(arrow, { style: S.IconStyle })}</S.IconWrapper>}
    </S.Button>
  );
};
