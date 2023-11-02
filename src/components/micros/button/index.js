import * as S from "./styles";
import React from 'react';

export const ButtonComponent = ({ onPress, label, backgroundColor, marginT, icon, arrow, flexStyle, weight }) => {
  const isNull = flexStyle === 'null';
  const estilo = isNull ? S.ContainerNoFlex : S.Container;
  
  let marginLeft = S.genContainer;
  if ((icon !== null && icon !== undefined) && (arrow !== null && arrow !== undefined)){
    marginLeft = S.genContainerNoMargin;
  }

  return (
    <S.Container backgroundColor={backgroundColor} marginT={marginT}>
      <S.Button style={estilo} onPress={onPress}>
        {icon && React.cloneElement(icon, { style: S.Icon })}
        <S.Text style={{ margin: 0, ...weight && { fontWeight: "bold" }} } link={true}>{label}</S.Text>
        {arrow && React.cloneElement(arrow, { style: S.img })}
      </S.Button>
    </S.Container>
  );
};
