import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { useSelector, useDispatch } from "react-redux";

import DefaultStyles from "../../styles/defaultStyles";

let today = new Date().toISOString().slice(0, 10);

const HomeChips = () => {
  const chips1 = useSelector((state) => state.chips.chips);
  console.log(chips1);
  return (
    <View>
      <View style={{ flexDirection: "row", paddingVertical: 25 }}>
        <Icon
          type="Ionicons"
          name="information-circle-outline"
          style={{ fontSize: 24, color: "#FF4713" }}
        />
        <Text style={DefaultStyles.boldOrangeText}>
          {"  "}Actualizado al:{" "}
          <Text style={DefaultStyles.normalText}>{today}</Text>
        </Text>
      </View>
      <View style={styles.headerbox}>
        <View
          style={{
            width: "50%",
            backgroundColor: "#d3d3d3",
            padding: 15,
            borderRadius: 10,
            marginRight: 10,
          }}
        >
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
              207
            </Text>
          </View>
          <View style={{ height: 50, justifyContent: "center" }}>
            <Text
              style={{
                ...DefaultStyles.normalOrangeText,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Total de Registrados
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "50%",
            backgroundColor: "#d3d3d3",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Icon type="Ionicons" name="cash" style={{ color: "#FF4713" }} />
            <Text
              style={{
                ...DefaultStyles.boldOrangeText,
                color: "#981D97",
              }}
            >
              600
            </Text>
          </View>
          <View style={{ height: 50, justifyContent: "center" }}>
            <Text
              style={{
                ...DefaultStyles.normalOrangeText,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Histórico
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.headerbox}>
        <View
          style={{
            width: "50%",
            backgroundColor: "#d3d3d3",
            padding: 15,
            borderRadius: 10,
            marginRight: 10,
          }}
        >
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
              26
            </Text>
          </View>
          <View style={{ height: 50, justifyContent: "center" }}>
            <Text
              style={{
                ...DefaultStyles.normalOrangeText,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Total de Incentivos
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "50%",
            backgroundColor: "#d3d3d3",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Icon type="Ionicons" name="cash" style={{ color: "#FF4713" }} />
            <Text
              style={{
                ...DefaultStyles.boldOrangeText,
                color: "#981D97",
              }}
            >
              268
            </Text>
          </View>
          <View style={{ height: 50, justifyContent: "center" }}>
            <Text
              style={{
                ...DefaultStyles.normalOrangeText,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Histórico
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerbox: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
  },
  headerfilter: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  rowinside: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
    marginVertical: 5,
  },
  card: {
    paddingVertical: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "FuturaPTBook",
    color: "#000",
    marginLeft: 10,
  },
  containermain: {
    marginTop: 20,
  },
  icon: {
    color: "#FF4713",
  },
});

export default HomeChips;
