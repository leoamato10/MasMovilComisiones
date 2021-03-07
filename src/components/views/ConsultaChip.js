import React from "react";
import { View, Text } from "react-native";

// import { Header } from "molecules";
import Header from "../molecules/Header";

const ConsultaChip = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Text style={{ fontSize: 50 }}>Consulta de Chip</Text>
    </View>
  );
};

export default ConsultaChip;
