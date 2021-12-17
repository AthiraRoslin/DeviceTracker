import React from "react";
import { Text, TouchableOpacity } from "react-native";

import {
  MainContainer,
  DetailsContainer,
  ActionImage,
  ImageContainer,
} from "./styles";

interface Props {
  imei: string;
  model: string;
  make: string;
  os: string;
  currentOwner: string;
  onEditPressed: (
    imei: string,
    model: string,
    make: string,
    os: string,
    currentOwner: string
  ) => void;
  onDeletePressed: (imei: string) => void;
}

const DeviceDetails = ({
  imei,
  model,
  make,
  os,
  currentOwner,
  onEditPressed,
  onDeletePressed,
}: Props) => {
  return (
    <MainContainer>
      <DetailsContainer>
        <Text>{"Model:  " + make + " - " + model}</Text>
        <Text>{"OS:  " + os}</Text>
        <Text>{"IMEI:  " + imei}</Text>
        <Text>{"Owner:  " + currentOwner}</Text>
      </DetailsContainer>
      <ImageContainer>
        <TouchableOpacity
          onPress={() => onEditPressed(imei, model, make, os, currentOwner)}
        >
          <ActionImage
            resizeMode={"contain"}
            source={require("../assets/edit.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeletePressed(imei)}>
          <ActionImage
            resizeMode={"contain"}
            source={require("../assets/delete.png")}
          />
        </TouchableOpacity>
      </ImageContainer>
    </MainContainer>
  );
};

export default DeviceDetails;
