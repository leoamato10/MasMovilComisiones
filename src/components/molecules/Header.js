import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Button,
  Icon,
  Header,
  Left,
  View,
  Text,
  Right,
  Thumbnail,
} from "native-base";
import { DefaultStyles } from "styles";

const uri =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ88nDFCxmzQeXgsq22U8pFzGP6_WoytyCg&usqp=CAU";

const CustomHeader = ({ navigation, backButton, loggedIn }) => {
  return (
    <View>
      <Header noShadow style={{ width: "100%", justifyContent: "flex-start" }}>
        {backButton && (
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon
              type="Ionicons"
              name="chevron-back-sharp"
              style={{ fontSize: 24, color: "#FF4713" }}
            />
          </Button>
        )}

        <Left>
          <Image
            // style={styles.logo}
            source={require("../../../assets/mas_movil_orange.png")}
          />
        </Left>
        {loggedIn && (
          <Right
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Icon
                type="FontAwesome"
                name="whatsapp"
                style={{ fontSize: 24, color: "#FF4713" }}
              />
              <Text style={{ fontSize: 12, color: "#FF4713" }}>Ayuda</Text>
            </View>
            <View>
              <Thumbnail
                small
                source={{ uri: uri }}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
          </Right>
        )}
      </Header>
      <View style={DefaultStyles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    margin: 15,
  },
});

export default CustomHeader;
