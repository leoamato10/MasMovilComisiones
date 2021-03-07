import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen, CreateAccountScreen } from "views";
import { BottomTabNavigator } from "navigators";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        {isSignedIn ? (
          <>
            <AuthStack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />
          </>
        ) : (
          <>
            <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
            <AuthStack.Screen
              name="CreateAccountScreen"
              component={CreateAccountScreen}
            />
          </>
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;
