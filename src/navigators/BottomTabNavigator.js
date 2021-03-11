import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  RegistrarChip,
  ConsultaChip,
  Noticias,
  Pagos,
} from "views";
import { DefaultStyles } from "styles";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RegistrarChipStack = createStackNavigator();
const ConsultaChipStack = createStackNavigator();
const NoticiasStack = createStackNavigator();
const PagosStack = createStackNavigator();

const HomeScreenStack = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);

const RegistrarChipScreenStack = () => (
  <RegistrarChipStack.Navigator headerMode="none">
    <RegistrarChipStack.Screen name="HomeScreen" component={RegistrarChip} />
  </RegistrarChipStack.Navigator>
);
const ConsultaChipScreenStack = () => (
  <ConsultaChipStack.Navigator headerMode="none">
    <ConsultaChipStack.Screen name="HomeScreen" component={ConsultaChip} />
  </ConsultaChipStack.Navigator>
);
const NoticiasScreenStack = () => (
  <NoticiasStack.Navigator headerMode="none">
    <NoticiasStack.Screen name="HomeScreen" component={Noticias} />
  </NoticiasStack.Navigator>
);

const PagosScreenStack = () => (
  <PagosStack.Navigator headerMode="none">
    <PagosStack.Screen name="HomeScreen" component={Pagos} />
  </PagosStack.Navigator>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: "#707070",
        activeTintColor: "#981D97",
        style: {
          height: 70,
          backgroundColor: "#fff",
          paddingBottom: 5,
          borderTopColor: "white",
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
        // labelStyle: {
        //   fontSize: 14,
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RegistrarChip"
        component={RegistrarChipScreenStack}
        options={{
          tabBarLabel: "Registrar Chip",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="sim-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ConsultaChip"
        component={ConsultaChipScreenStack}
        options={{
          tabBarLabel: "Consulta de Chip",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={NoticiasScreenStack}
        options={{
          tabBarLabel: "Noticias",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pagos"
        component={PagosScreenStack}
        options={{
          tabBarLabel: "Pagos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
