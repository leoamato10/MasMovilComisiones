import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AuthStackNavigator from "navigators/AuthStackNavigator";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import * as Font from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import chipsReducer from "./src/Store/reducers/chips";

const rootReducer = combineReducers({
  chips: chipsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  const [isFontReady, setFontReady] = useState(false);

  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        FuturaPTBook: require("./assets/FuturaPTBook.otf"),
        FuturaPTHeavy: require("./assets/FuturaPTHeavy.otf"),
      });
    }
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  const NoFontLoaded = () => (
    <View style={[styles.container, styles.horizontal]}>
      <Text>Can´t load fonts</Text>
      <ActivityIndicator size="large" color="#FF4713" />
    </View>
  );

  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(material)}>
        {isFontReady ? <AuthStackNavigator /> : <NoFontLoaded />}
      </StyleProvider>
    </Provider>
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
