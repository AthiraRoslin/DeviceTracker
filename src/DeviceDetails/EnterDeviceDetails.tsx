import React from "react";
import { View, Button } from "react-native";

import { TextInput, InstructionText, ButtonContainer } from "./styles";

interface Props {
  data: any;
  onSubmitPressed: (data: any, isEdited: boolean) => void;
}

const EnterDeviceDetails = ({ data, onSubmitPressed }: Props) => {
  const [imeiText, onImeiTextChange] = React.useState(data.imei);
  const [makeText, onMakeTextChange] = React.useState(data.make);
  const [modelText, onModelTextChange] = React.useState(data.model);
  const [osText, onOSChange] = React.useState(data.os);
  const [currentOwnerText, onCurrentOwnerTextChange] = React.useState(
    data.currentOwner
  );

  const isEdited = data.imei != undefined ? true : false;

  return (
    <View>
      <InstructionText>{"Enter the following details"}</InstructionText>
      <TextInput
        onChangeText={onImeiTextChange}
        value={imeiText}
        placeholder={"IMEI"}
        maxLength={15}
      />
      <TextInput
        onChangeText={onMakeTextChange}
        value={makeText}
        placeholder={"Make"}
        maxLength={15}
      />
      <TextInput
        onChangeText={onModelTextChange}
        value={modelText}
        placeholder={"Model"}
        maxLength={15}
      />
      <TextInput
        onChangeText={onOSChange}
        value={osText}
        placeholder={"OS"}
        maxLength={15}
      />
      <TextInput
        onChangeText={onCurrentOwnerTextChange}
        value={currentOwnerText}
        placeholder={"Assigned to"}
        maxLength={15}
      />

      <ButtonContainer>
        <Button
          title={"Submit"}
          onPress={() =>
            onSubmitPressed(
              {
                make: makeText,
                model: modelText,
                os: osText,
                currentOwner: currentOwnerText,
                imei: imeiText,
              },
              isEdited
            )
          }
        />
      </ButtonContainer>
    </View>
  );
};

export default EnterDeviceDetails;
