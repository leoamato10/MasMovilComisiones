import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { Icon } from "native-base";

import DefaultStyles from "../../styles/defaultStyles";

const HomeChips = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <View style={{ width: "50%", backgroundColor: "red" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 125,
          }}
        >
          <Icon
            type="FontAwesome5"
            name="sim-card"
            style={{ color: "#FF4713" }}
          />
          <Text style={{ ...DefaultStyles.boldOrangeText, color: "#981D97" }}>
            {" "}
            207
          </Text>
        </View>
        <Text style={DefaultStyles.normalOrangeText}>Total de Registrados</Text>
      </View>
      <View style={{ width: "50%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 125,
          }}
        >
          <Icon
            type="FontAwesome5"
            name="sim-card"
            style={{ color: "#FF4713" }}
          />
          <Text style={{ ...DefaultStyles.boldOrangeText, color: "#981D97" }}>
            {" "}
            600
          </Text>
        </View>
        <Text style={DefaultStyles.normalOrangeText}>Histórico</Text>
      </View>
      <View style={{ width: "50%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 125,
          }}
        >
          <Icon
            type="FontAwesome5"
            name="sim-card"
            style={{ color: "#FF4713" }}
          />
          <Text style={{ ...DefaultStyles.boldOrangeText, color: "#981D97" }}>
            {" "}
            600
          </Text>
        </View>
        <Text style={DefaultStyles.normalOrangeText}>Histórico</Text>
      </View>
      <View style={{ width: "50%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 125,
          }}
        >
          <Icon
            type="FontAwesome5"
            name="sim-card"
            style={{ color: "#FF4713" }}
          />
          <Text style={{ ...DefaultStyles.boldOrangeText, color: "#981D97" }}>
            {" "}
            600
          </Text>
        </View>
        <Text style={DefaultStyles.normalOrangeText}>Histórico</Text>
      </View>
    </View>
  );
};

export default HomeChips;
