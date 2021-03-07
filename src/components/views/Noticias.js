import React from "react";
import { View, Text } from "react-native";

// import { Header } from "molecules";
import Header from "../molecules/Header";

const Noticias = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Text style={{ fontSize: 50 }}>Noticias</Text>
    </View>
  );
};

export default Noticias;
