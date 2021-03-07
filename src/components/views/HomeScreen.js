import React from "react";
import { View, Text } from "react-native";

import { Header } from "molecules";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Text style={{ fontSize: 50 }}>Hello</Text>
      <Text style={{ fontSize: 50, fontFamily: "FuturaPTBook" }}>Hello</Text>
      <Text style={{ fontSize: 50, fontFamily: "FuturaPTHeavy" }}>Hello</Text>
    </View>
  );
};

export default HomeScreen;
