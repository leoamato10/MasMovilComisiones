import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
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
import { sendWhatsapp } from "utils/Utils";

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
            <TouchableOpacity
              style={{
                alignItems: "center",
                paddingHorizontal: 10,
              }}
              onPress={() => sendWhatsapp()}
            >
              <Icon
                type="FontAwesome"
                name="whatsapp"
                style={{ fontSize: 30, color: "#FF4713" }}
              />
              <Text style={{ fontSize: 12, color: "#FF4713" }}>Ayuda</Text>
            </TouchableOpacity>
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
