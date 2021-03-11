import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { CustomHeader } from "molecules";
import { HomeChips, ChipsChart } from "atoms";
import { DefaultStyles } from "styles";

const HomeScreen = () => {
  return (
    <View style={DefaultStyles.container}>
      <CustomHeader loggedIn={true} />
      <View style={styles.Content}>
        <Text style={DefaultStyles.boldOrangeText}>Bienvenido, José</Text>
        <HomeChips />
        <ChipsChart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
