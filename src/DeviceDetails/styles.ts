import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex-direction: row;
  margin-vertical: 10px;
  margin-horizontal: 10px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const ActionImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-end: 15px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 10px;
`;

export const InstructionText = styled.Text`
  margin-horizontal: 10px;
  margin-vertical: 10px;
`;

export const ButtonContainer = styled.View`
  margin-vertical: 10px;
  margin-horizontal: 10px;
`;
