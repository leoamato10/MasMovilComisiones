import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { Icon } from "native-base";
import { BarChart } from "react-native-chart-kit";
import { CustomHeader } from "molecules";
import { HomeChips } from "atoms";
import DefaultStyles from "../../styles/defaultStyles";

let today = new Date().toISOString().slice(0, 10);
const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Enero", "Febrero", "Marzo"],
  datasets: [
    {
      data: [50, 45, 28, 40, 60],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "black",
  strokeWidth: 2, // optional, default 3
  barPercentage: 2,
  useShadowColorFromDataset: false, // optional
  fillShadowGradient: "#981D97",
  fillShadowGradientOpacity: 1,
};

const HomeScreen = () => {
  return (
    <View style={DefaultStyles.container}>
      <CustomHeader />
      <View
        style={{
          padding: 20,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text style={DefaultStyles.boldOrangeText}>Bienvenido, José</Text>
        <View style={{ flexDirection: "row", paddingVertical: 25 }}>
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
        <HomeChips />
        <View>
          <Text
            style={{
              ...DefaultStyles.normalText,
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Histórico Sim Card Vs Comisión
          </Text>
          <ScrollView horizontal>
            <BarChart
              // style={graphStyle}
              data={data}
              width={screenWidth - 40}
              height={220}
              // yAxisLabel="$"
              verticalLabelRotation={0}
              chartConfig={chartConfig}
              withInnerLines={false}
              showBarTops={false}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
