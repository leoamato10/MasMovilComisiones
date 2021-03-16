import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

import DefaultStyles from "../../styles/defaultStyles";

let today = new Date().toISOString().slice(0, 10);

const HomeChips = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 25,
          alignItems: "center",
        }}
      >
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
        <View style={{ width: "50%" }}>
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
          <View
            style={{
              paddingTop: 10,
            }}
          >
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
        <View style={{ width: "50%" }}>
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
          <View
            style={{
              paddingTop: 10,
            }}
          >
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
      <View style={{ ...styles.headerbox, paddingTop: 15 }}>
        <View style={{ width: "50%" }}>
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
              26.80
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10,
            }}
          >
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
        <View style={{ width: "50%" }}>
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
              268.00
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10,
            }}
          >
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

    // <Grid style={{ justifyContent: "center", alignItems: "center" }}>
    //   <Col
    //     style={{
    //       height: 300,
    //     }}
    //   >
    //     <Row>
    //       <ChipCmp text={"Total registrados"} quantity={"207"} />
    //     </Row>
    //     <Row>
    //       <ChipCmp text={"Total Incentivos"} quantity={"26.80"} />
    //     </Row>
    //   </Col>
    //   <Col style={{ height: 300 }}>
    //     <Row>
    //       <ChipCmp text={"Histórico"} quantity={"600"} />
    //     </Row>
    //     <Row>
    //       <ChipCmp text={"Histórico"} quantity={"68.00"} />
    //     </Row>
    //   </Col>
    // </Grid>
  );
};

const styles = StyleSheet.create({
  headerbox: {
    flexDirection: "row",
    marginTop: 20,
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
