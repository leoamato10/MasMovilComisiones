import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MainStackNavigator from "navigators/MainStackNavigator";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import * as Font from "expo-font";

const App = () => {
  const [isFontReady, setFontReady] = useState(false);

  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        FuturaPTBook: require("./assets/FuturaPTBook.otf"),
        FuturaPTHeavy: require("./assets/FuturaPTHeavy.otf"),
      });
    }
    // after the loading set the font status to true
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  const NoFontLoaded = () => (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#FF4713" />
    </View>
  );

  return (
    <StyleProvider style={getTheme(material)}>
      {isFontReady ? <MainStackNavigator /> : <NoFontLoaded />}
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default App;
