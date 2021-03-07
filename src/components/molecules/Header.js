import React from "react";
import { StyleSheet, Image } from "react-native";
import { Header, Left } from "native-base";

const CustomHeader = () => {
  return (
    <Header noShadow style={{ width: "100%", justifyContent: "flex-start" }}>
      <Left>
        <Image
          // style={styles.logo}
          source={require("../../../assets/mas_movil_orange.png")}
        />
      </Left>
    </Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    margin: 15,
  },
});

export default CustomHeader;
