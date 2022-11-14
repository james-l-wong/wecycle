/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/Home";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Home from "../assets/icons/Home";
import Devices from "../screens/Devices";
import Guides from "../screens/Guides";
import Services from "../screens/Services";
import { LoginNavigator } from "./LoginNavigator";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/** add in login navigator (Stack) as a Stack.Screen */}
      {/* <Stack.Screen
        name="login_flow"
        component={LoginNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { height: 90 },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Dashboard",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // tabBarIcon: ({ color }) => <Home />,
          headerStyle: {
            height: 110,
          },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                })}
              >
                <FontAwesome
                  name="bell"
                  size={22}
                  color={"white"}
                  style={{
                    color: "black",
                    paddingHorizontal: 1,
                  }}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 7,
                })}
              >
                <FontAwesome
                  name="user"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{
                    paddingHorizontal: 4,
                  }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Devices}
        options={({ navigation }: RootTabScreenProps<"TabTwo">) => ({
          title: "Devices",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerStyle: {
            height: 110,
          },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                })}
              >
                <FontAwesome
                  name="bell"
                  size={22}
                  color={"white"}
                  style={{
                    color: "black",
                    paddingHorizontal: 1,
                  }}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 7,
                })}
              >
                <FontAwesome
                  name="user"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{
                    paddingHorizontal: 4,
                  }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Guides}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Guides",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerStyle: {
            height: 110,
          },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                })}
              >
                <FontAwesome
                  name="bell"
                  size={22}
                  color={"white"}
                  style={{
                    color: "black",
                    paddingHorizontal: 1,
                  }}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 7,
                })}
              >
                <FontAwesome
                  name="user"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{
                    paddingHorizontal: 4,
                  }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabFour"
        component={Services}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Services",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="recycle" color={color} />
          ),
          headerStyle: {
            height: 110,
          },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                })}
              >
                <FontAwesome
                  name="bell"
                  size={22}
                  color={"white"}
                  style={{
                    color: "black",
                    paddingHorizontal: 1,
                  }}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 7,
                })}
              >
                <FontAwesome
                  name="user"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{
                    paddingHorizontal: 4,
                  }}
                />
              </Pressable>
            </View>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
