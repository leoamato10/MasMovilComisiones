import React from "react";
import { View, Text } from "react-native";

// import { Header } from "molecules";
import Header from "../molecules/Header";

const RegistrarChip = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Text style={{ fontSize: 50 }}>Registrar Chip</Text>
    </View>
  );
};

export default RegistrarChip;
