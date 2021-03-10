import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { Icon } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ChipCmp } from "atoms";

import DefaultStyles from "../../styles/defaultStyles";

const HomeChips = () => {
  return (
    <Grid>
      <Col
        style={{
          height: 300,
        }}
      >
        <Row>
          <ChipCmp />
        </Row>
        <Row>
          <ChipCmp />
        </Row>
      </Col>
      <Col style={{ height: 300 }}>
        <Row>
          <ChipCmp />
        </Row>
        <Row>
          <ChipCmp />
        </Row>
      </Col>
    </Grid>
  );
};

export default HomeChips;
