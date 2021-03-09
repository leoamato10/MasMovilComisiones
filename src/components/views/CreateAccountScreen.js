import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Input,
  CheckBox,
  Item,
  Button,
  Thumbnail,
  ListItem,
  Body,
  Label,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { Header } from "molecules";
import { CustomHeader } from "molecules";
import { DefaultStyles } from "styles";

const uri =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ88nDFCxmzQeXgsq22U8pFzGP6_WoytyCg&usqp=CAU";

const CreateAccountScreen = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={DefaultStyles.container}>
      <CustomHeader />

      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
          />
        )}
      </View>

      <View style={DefaultStyles.divider} />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={DefaultStyles.boldOrangeText}>Crear Cuenta</Text>
        <Text style={DefaultStyles.normalText}>
          Registre sus datos para iniciar
        </Text>

        <View>
          <Thumbnail
            large
            source={{ uri: uri }}
            style={{
              alignSelf: "center",
              marginTop: 15,
            }}
          />
          <Text
            style={{
              ...DefaultStyles.normalText,
              color: "#FF4713",
              textAlign: "center",
            }}
          >
            Subir Foto
          </Text>
          <View style={{ marginTop: 20 }}>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="Nombre"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="#Identificación"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item
              rounded
              style={{ borderRadius: 10, marginBottom: 5 }}
              onPress={showDatepicker}
            >
              <Label
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",

                  width: "100%",

                  textAlignVertical: "center",
                  height: 50,
                }}
              >
                Fecha de Nacimiento
              </Label>
            </Item>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="Correo Electrónico"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="Teléfono"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="Operador"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="Provincia"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
              <Input
                placeholder="Dealer"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
            <Item rounded style={{ borderRadius: 10 }}>
              <Input
                placeholder="Coordinador"
                placeholderTextColor="#FF4713"
                style={{
                  ...DefaultStyles.normalOrangeText,
                  textAlign: "center",
                }}
              />
            </Item>
          </View>
          <View>
            <ListItem>
              <CheckBox checked={false} color="#707070" />
              <Body>
                <Text style={DefaultStyles.normalText}>
                  {" "}
                  Aceptar Términos y Condiciones
                </Text>
              </Body>
            </ListItem>
            <Button
              full
              rounded
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={DefaultStyles.buttonText}>Registrar</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
