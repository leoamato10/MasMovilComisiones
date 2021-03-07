import React from "react";
import { View, Text } from "react-native";
import { Input, Icon, Item, Button } from "native-base";
import { CustomHeader } from "molecules";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader />
      <View
        style={{
          borderBottomColor: "#707070",
          borderBottomWidth: 1,
          width: "80%",
          paddingVertical: 5,
          alignSelf: "center",
          opacity: 0.08,
        }}
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "FuturaPTHeavy",
            color: "#FF4713",
          }}
        >
          Bienvenido
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "FuturaPTBook",
            color: "#707070",
          }}
        >
          Ingrese al sistema de vendedores
        </Text>
        <View>
          <View style={{ paddingVertical: 50 }}>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "FuturaPTBook",
                  color: "#FF4713",
                }}
              >
                Usuario
              </Text>

              <Item rounded style={{ borderRadius: 10 }}>
                <Input />
                <Icon
                  type="FontAwesome"
                  active
                  name="user-circle"
                  style={{ fontSize: 24, color: "#FF4713" }}
                />
              </Item>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "FuturaPTBook",
                  color: "#FF4713",
                }}
              >
                Contraseña
              </Text>

              <Item rounded style={{ borderRadius: 10 }}>
                <Input />
                <Icon
                  type="FontAwesome5"
                  active
                  name="eye-slash"
                  style={{ fontSize: 24, color: "#FF4713" }}
                />
              </Item>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "FuturaPTBook",
                  color: "#707070",
                  textAlign: "right",
                  marginTop: 10,
                }}
              >
                ¿Eres nuevo?,{" "}
                <Text
                  style={{ color: "#FF4713" }}
                  onPress={() => navigation.navigate("CreateAccountScreen")}
                >
                  Crear Cuenta
                </Text>
              </Text>
            </View>
          </View>
          <Button
            full
            rounded
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "FuturaPTBook",
                color: "#fff",
              }}
            >
              Iniciar Sesión
            </Text>
          </Button>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "FuturaPTBook",
          color: "#707070",
          alignSelf: "center",
        }}
      >
        ¿Necesitas Ayuda?
      </Text>
    </View>
  );
};

export default SignInScreen;
