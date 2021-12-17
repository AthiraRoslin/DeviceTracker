import React from "react";

export const initialState = {
  deviceList: [
    {
      make: "Motorola",
      model: "Moto",
      os: "Android 8",
      currentOwner: "Athira",
      imei: "987654321012345",
    },
    {
      make: "Motorola",
      model: "Moto",
      os: "Android 8",
      currentOwner: "Athira",
      imei: "987654321012347",
    },
  ],
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "Add":
      const list = [...state.deviceList, action.payload];
      return {
        ...state,
        deviceList: list,
      };
    case "Edit":
      const newList = state.deviceList.map((item) => {
        if (item.imei === action.payload.imei) {
          const updatedItem = {
            make: action.payload.make,
            model: action.payload.model,
            os: action.payload.os,
            currentOwner: action.payload.currentOwner,
            imei: action.payload.imei,
          };

          return updatedItem;
        }
        return item;
      });
      return {
        ...state,
        deviceList: newList,
      };
    case "Delete":
      const devicelist = state.deviceList.filter(
        (item) => item.imei !== action.payload
      );

      return {
        ...state,
        deviceList: devicelist,
      };
    default:
      return state;
  }
}

export default reducer;
