import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import DefaultStyles from "../../styles/defaultStyles";

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

const ChipsChart = () => {
  return (
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
  );
};

export default ChipsChart;
