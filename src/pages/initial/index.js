import React,{useEffect} from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Initial = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Menu");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSubmit();
    }, 3000);
  }, []);


  return (
    <S.Container>
    </S.Container>
  );
};

