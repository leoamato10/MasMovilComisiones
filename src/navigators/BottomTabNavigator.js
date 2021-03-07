import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  RegistrarChip,
  ConsultaChip,
  Noticias,
  Pagos,
} from "views";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="RegistrarChip" component={RegistrarChip} />
      <Tab.Screen name="ConsultaChip" component={ConsultaChip} />
      <Tab.Screen name="Noticias" component={Noticias} />
      <Tab.Screen name="Pagos" component={Pagos} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
