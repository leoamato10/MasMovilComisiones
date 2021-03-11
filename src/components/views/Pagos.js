import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Icon,
} from "native-base";
import DefaultStyles from "styles/defaultStyles";

import { size } from "lodash";
import moment from "moment/moment";
import CustomHeader from "../molecules/Header";

const data = [
  {
    id: "XXXX101429392121q",
    Periodo: "Enero 2021",
    saldo: 119.0,
  },
  {
    id: "XXXX1014293921212p",
    Periodo: "Febrero 2021",
    saldo: 200.0,
  },
  {
    id: "XXXX101429392121",
    Periodo: "Marzo 2021",
    saldo: 200.0,
  },
];

moment.locale("es");
const Pagos = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader loggedIn={true} />
      <View style={styles.headerfilter}>
        <Text
          style={{
            ...DefaultStyles.boldOrangeText,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          Consulta de Pagos
        </Text>
        <Icon
          type="Ionicons"
          name="funnel-outline"
          style={{ color: "#981D97", marginLeft: 10 }}
        />
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
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Registros
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
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Comisiones
            </Text>
          </View>
        </View>
      </View>

      <Container style={styles.containermain}>
        <Content>
          {size(data) > 0 &&
            data.map((item) => (
              <Card style={styles.card} key={item.id}>
                <View style={styles.rowinside}>
                  <Icon
                    type="Ionicons"
                    name="calendar-outline"
                    style={styles.icon}
                  />
                  <Text style={styles.text}>{item.Periodo}</Text>
                </View>
                <View style={styles.rowinside}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="cash"
                    style={styles.icon}
                  />
                  <Text style={styles.text}>{item.saldo.toFixed(2)}</Text>
                </View>
              </Card>
            ))}
        </Content>
      </Container>
    </View>
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

export default Pagos;
