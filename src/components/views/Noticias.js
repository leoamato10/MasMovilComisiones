import React from "react";
import { View, StyleSheet, Image } from "react-native";
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
import CustomHeader from "molecules/Header";
import { size, map } from "lodash";
import moment from "moment/moment";

const data = [
  {
    id: "XXXX101429392121q",
    image: require("assets/servicios-tv.png"),
    titulo: "Nueva Prociones en Más Móvil",
    descripcion:
      "Aproveche las nuevas promociones de más móvil, en el mes de enero, solo por este mes estaremos brindando planes totalmente personalizados desde 20 dólares en adelante",
    fecha: new Date(),
  },
  {
    id: "XXXX101429392121A",
    image: require("assets/navegar.png"),
    titulo: "¿Qué es un plan de datos?",
    descripcion:
      "Aproveche las nuevas promociones de más móvil, en el mes de enero, solo por este mes estaremos brindando planes totalmente personalizados desde 20 dólares en adelante",
    fecha: new Date(),
  },
  {
    id: "XXXX101429392121b",
    image: require("assets/5g.png"),
    titulo: "¿Sábes que es 5G?",
    descripcion:
      "Aproveche las nuevas promociones de más móvil, en el mes de enero, solo por este mes estaremos brindando planes totalmente personalizados desde 20 dólares en adelante",
    fecha: new Date(),
  },
];

console.log(data);

moment.locale("es");
const Noticias = () => {
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
          Noticias
        </Text>
      </View>

      <Container style={styles.containermain}>
        <Content>
          {size(data) > 0 &&
            map(data, (item) => (
              <Card style={styles.card} key={item.id}>
                <View style={styles.rowinside}>
                  <Image source={item.image} style={styles.imagen} />
                  <View style={{ width: "60%" }}>
                    <Text style={styles.text}>{item.titulo}</Text>
                    <Text style={styles.date}>
                      {moment(item.date).format("l")}
                    </Text>
                  </View>
                </View>
              </Card>
            ))}
        </Content>
      </Container>
    </View>
  );
};

const styles = {
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
    width: "95%",
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
  imagen: {
    width: 85,
    height: 102,
  },
  date: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
    fontFamily: "FuturaPTBook",
    color: "#981D97",
    marginLeft: 10,
    fontWeight: "bold",
  },
};

export default Noticias;
