import styled from "styled-components/native";

export const TitleText = styled.Text`
  flex: 0.1;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;

export const MainContainer = styled.View`
  flex: 1;
  margin-vertical: 10px;
`;

export const Separator = styled.View`
  background-color: #000000;
  height: 1px;
  margin-horizontal: 5px;
`;

export const ImageContainer = styled.TouchableOpacity`
  flex-direction: row-reverse;
`;

export const AddImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-end: 15px;
`;
