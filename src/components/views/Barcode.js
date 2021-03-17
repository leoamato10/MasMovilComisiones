import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Button } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";
import DefaultStyles from "styles/defaultStyles";

export default function BarcodeView({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert("Comisiones App", `Tarjeta Sim Escaneada ${data} `);
  };

  if (hasPermission === null) {
    return <Text>Solicitando Permisos</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sin acceso a la camara</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <Button
        full
        rounded
        style={{ ...styles.btn, marginVertical: 20 }}
        onPress={() => {
          setScanned(false);
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={DefaultStyles.buttonText}>Salir</Text>
      </Button>

      {scanned && (
        <Button
          full
          rounded
          style={styles.btn}
          onPress={() => setScanned(false)}
        >
          <Text style={DefaultStyles.buttonText}>Escanear Nuevamente</Text>
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
