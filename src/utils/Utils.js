import { Alert, Linking } from "react-native";

export const sendWhatsapp = function () {
  const url =
    "https://api.whatsapp.com/send/?phone=50760634535&text=Hola%2C+escribo+desde+el+app+de+comisiones+m%C3%A1s+m%C3%B3vil.&app_absent=0";
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert("IMfinity", "Error al intentar contactar", [
          {
            text: "Aceptar",
          },
        ]);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("Error en el proceso", err));
};
