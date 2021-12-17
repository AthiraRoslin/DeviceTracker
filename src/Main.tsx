import React, { useCallback } from "react";
import { Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import DeviceDetails from "./DeviceDetails/DeviceDetails";
import EnterDeviceDetails from "./DeviceDetails/EnterDeviceDetails";
import {
  MainContainer,
  TitleText,
  Separator,
  AddImage,
  ImageContainer,
} from "./styles";

const Main = () => {
  const loading = useSelector((state: any) => state.loading);
  const deviceList = useSelector((state: any) => state.deviceList);

  const [showDetailsScreen, setShowDetailsScreen] = React.useState(false);
  const [editingData, setEditingData] = React.useState({});

  const dispatch = useDispatch();

  const onEditPressed = (
    imei: string,
    model: string,
    make: string,
    os: string,
    currentOwner: string
  ) => {
    setShowDetailsScreen(true);
    setEditingData({
      make: make,
      model: model,
      os: os,
      currentOwner: currentOwner,
      imei: imei,
    });
  };

  const onDeletePressed = (imei: string) => {
    axios.get(`https://zenquotes.io/api/today`).then((response) => {
      dispatch({
        type: "Delete",
        payload: imei,
      });
      Alert.alert(
        "Device deleted",
        response.data[0].q + " - " + response.data[0].a,
        [{ text: "OK", onPress: () => console.log("Okay") }]
      );
    });
  };

  const onSubmitPressed = (data: any, isEdited: boolean) => {
    setShowDetailsScreen(false);
    setEditingData({});

    isEdited
      ? dispatch({
          type: "Edit",
          payload: data,
        })
      : dispatch({
          type: "Add",
          payload: data,
        });
  };

  const renderItem = useCallback(
    ({ item }: any) => (
      <DeviceDetails
        make={item.make}
        model={item.model}
        imei={item.imei}
        currentOwner={item.currentOwner}
        os={item.os}
        onEditPressed={onEditPressed}
        onDeletePressed={onDeletePressed}
      />
    ),
    []
  );

  const renderItemSeperator = useCallback(() => <Separator />, []);

  return (
    <MainContainer>
      <TitleText>{"Device Tracker"}</TitleText>

      <ImageContainer
        onPress={() => {
          setShowDetailsScreen(true);
        }}
      >
        <AddImage resizeMode={"contain"} source={require("./assets/add.png")} />
      </ImageContainer>

      {showDetailsScreen ? (
        <EnterDeviceDetails
          data={editingData}
          onSubmitPressed={onSubmitPressed}
        />
      ) : (
        <FlatList
          ListEmptyComponent={<Text>{"No test devices!!!"}</Text>}
          keyExtractor={(item) => item.imei}
          data={deviceList}
          renderItem={renderItem}
          ItemSeparatorComponent={renderItemSeperator}
        />
      )}
    </MainContainer>
  );
};

export default Main;
