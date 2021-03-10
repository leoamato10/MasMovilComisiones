import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { Icon } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import DefaultStyles from "../../styles/defaultStyles";

const ChipCmp = () => {
  return (
    <View style={{ paddingVertical: 20 }}>
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Icon
          type="FontAwesome5"
          name="sim-card"
          style={{ color: "#FF4713" }}
        />
        <Text
          style={{
            ...DefaultStyles.boldOrangeText,
            color: "#981D97",
          }}
        >
          {" "}
          207
        </Text>
      </View>
      <View
        style={{
          paddingTop: 10,
        }}
      >
        <Text
          style={{ ...DefaultStyles.normalOrangeText, textAlign: "center" }}
        >
          Total de Registrados
        </Text>
      </View>
    </View>
  );
};

export default ChipCmp;
