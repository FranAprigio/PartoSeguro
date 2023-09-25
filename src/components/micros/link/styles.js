import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
   
`;

export const Text = styled.Text`
  color: ${(props) => (props.link ? "#06277B" : "#08506F")};
  font-size: 16px;
  margin-right: 7px;
`;
export const Container = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  height: 25px;  
  width: 80%;
  margin-bottom:5px ;
`;
