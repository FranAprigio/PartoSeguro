import { useState } from "react";
import * as S from "./styles";

export const InputComponent = ({
  type,
  placeholder,
  onChangeText,
  value,
  label,
  showError,
}) => {
  const [show, setShow] = useState(false);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        showError={showError}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={type === "text" || show == true ? false : true}
        placeholder={placeholder}
      ></S.Input>
    </S.Container>
  );
};

export default InputComponent;
