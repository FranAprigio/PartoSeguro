import * as S from "./styles";
import { Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';

export const ButtonComponent = ({ onPress, label, backgroundColor, marginT, icon, arrow, flexStyle, weight }) => {
  const [iconComp, setIconComp] = useState(null);
  const [imgComp, setImgComp] = useState(null);
  
  
  const isNull = flexStyle === 'null';
  const estilo = isNull ? styles.containerNoFlex : styles.container;
  
  let marginLeft = styles.genContainer;
  if ((icon !== null && icon !== undefined) && (arrow !== null && arrow !== undefined)){
    marginLeft = styles.genContainerNoMargin;
  }


  useEffect(() => {
    if (icon !== null && icon !== undefined) {
      // Define o componente de imagem com base na condição do ícone
      setIconComp(<Image source={icon} style={styles.icon} />);
    }
    if (arrow !== null && arrow !== undefined) {
      // Define o componente de imagem com base na condição da seta
      setImgComp(<Image source={arrow} style={styles.img} />);
    }
  }, [icon, arrow]);

  return (
    <S.Container backgroundColor={backgroundColor} marginT={marginT} style={marginLeft}>
      <S.Button style={estilo} onPress={onPress}>
        {iconComp}
        <S.Text style={weight? {fontWeight: "bold"} : weight} link={true} >{label}</S.Text>
        {imgComp}
      </S.Button>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  genContainerNoMargin:{

  },
  genContainer: {
    marginLeft: "10%"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  containerNoFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  img: {
    padding: 10,
    width: 10,
    height: 10,
  },
  icon: {
    padding: 15,
    marginTop: 15,
    marginBottom: 15
  },
})