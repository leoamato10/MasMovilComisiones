import React from "react";
import { View, Text } from "react-native";

// import { Header } from "molecules";
import Header from "../molecules/Header";

const Pagos = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Text style={{ fontSize: 50 }}>Pagos</Text>
    </View>
  );
};

export default Pagos;
