import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Input, Icon, Item, Button } from "native-base";
import { CustomHeader } from "molecules";
import DefaultStyles from "../../styles/defaultStyles";

const windowHeight = Dimensions.get("window").height;

const SignInScreen = ({ navigation }) => {
  return (
    <View style={DefaultStyles.container}>
      <CustomHeader />
      <View style={DefaultStyles.divider} />
      <View style={{ padding: 20 }}>
        <Text style={DefaultStyles.boldOrangeText}>Bienvenido</Text>
        <Text style={DefaultStyles.normalText}>
          Ingrese al sistema de vendedores
        </Text>
        <View style={{ height: "100%", justifyContent: "space-evenly" }}>
          <View>
            <View>
              <Text
                style={{ ...DefaultStyles.normalOrangeText, paddingBottom: 15 }}
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
                style={{ ...DefaultStyles.normalOrangeText, paddingBottom: 15 }}
              >
                Contraseña
              </Text>

              <Item rounded style={{ borderRadius: 10 }}>
                <Input secureTextEntry />
                <Icon
                  type="FontAwesome5"
                  active
                  name="eye-slash"
                  style={{ fontSize: 24, color: "#FF4713" }}
                />
              </Item>
              <Text
                style={{
                  ...DefaultStyles.normalText,
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
            <Text style={DefaultStyles.buttonText}>Iniciar Sesión</Text>
          </Button>
          <Text
            style={{
              ...DefaultStyles.normalText,
              textAlign: "center",
              paddingBottom: windowHeight / 6,
            }}
          >
            ¿Necesitas Ayuda?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
