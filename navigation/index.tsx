/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
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
import Account from "../screens/Account/Account";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/Home";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Home from "../assets/icons/Home";
import ServiceList from "../screens/Services"
import Devices from "../screens/Devices";
import Guides from "../screens/Guides";
import Services from "../screens/Services";
import UploadDevice from "../screens/UploadDevice"
import { LoginNavigator } from "./LoginNavigator";
import { DeviceNavigator } from "./DeviceNavigator";
import Notifications from "../screens/Notifications";
import Vouchers from "../screens/Account/Vouchers";
import Barcode from "../screens/Account/Barcode";
import Settings from "../screens/Account/Settings";
import DeviceDetails from "../screens/DeviceDetails";
import { ColesLogo, WoolLogo, OfficeLogo, MyerLogo } from "../screens/Account/LogoImages";
import Details from "../screens/Details";
import Guide from "../screens/Guide";
import { VStack, Badge } from "native-base";

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
      <Stack.Screen
        name="login_flow"
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeviceDetails"
        component={DeviceDetails}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="ServiceList"
        component={ServiceList}
        options={{ headerShown: true, title: " " }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Vouchers"
        component={Vouchers}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Guide"
        component={Guide}
      />
      <Stack.Screen
        name="Upload"
        component={UploadDevice}
        options={{ headerShown: true }}
      />
      <Stack.Group>
        <Stack.Screen name="Account" component={Account} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Group>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true }}
      />
      {/* <Stack.Group>
        <Stack.Screen name="Vouchers" component={Vouchers} />
      </Stack.Group>
      <Stack.Group> */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Voucher Barcode" component={Barcode} />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Group>  */}
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
  const [points, setPoints] = React.useState(3000);
  const [voucherList, setVoucherList] = React.useState([]);
  const [redeemList, setRedeemList] = React.useState([
    {
      id: "Coles",
      pic: ColesLogo,
      cost: 5,
      pts: 1000
    },
    {
      id: "Woolworths",
      pic: WoolLogo,
      cost: 5,
      pts: 1000
    },
    {
      id: "Officeworks",
      pic: OfficeLogo,
      cost: 15,
      pts: 2000
    },
    {
      id: "Myers",
      pic: MyerLogo,
      cost: 20,
      pts: 3500
    }
  ]);

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { height: 90 },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        // component={TabOneScreen}
        children={() => (
          <TabOneScreen
            navigation={RootTabScreenProps<"TabOne">}
            points={points}
            vouchers={voucherList.length}
          />
        )}
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
              <VStack style={{zIndex: 6}}>
                <Badge // bg="red.400"
                  colorScheme="warning" rounded="full" mb={-8} mr={-12} zIndex={10} variant="solid" alignSelf="flex-end" _text={{
                    fontSize: 11
                  }}>
                  2
                </Badge>
              </VStack>
              <Pressable
                onPress={() => navigation.navigate("Notifications")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                  zIndex: 5
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
                accessible={true}
                accessibilityLabel="account button"
                onPress={() => navigation.navigate("Account", {
                  points: points,
                  setPoints: setPoints,
                  voucherList: voucherList,
                  setVoucherList: setVoucherList,
                  redeemList: redeemList,
                  setRedeemList: setRedeemList
                })}
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
          tabBarIcon: ({ color }) => <MaterialIcons name="important-devices" size={25} color={color} />,
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
              <VStack style={{zIndex: 6}}>
                <Badge // bg="red.400"
                  colorScheme="warning" rounded="full" mb={-8} mr={-12} zIndex={10} variant="solid" alignSelf="flex-end" _text={{
                    fontSize: 11
                  }}>
                  2
                </Badge>
              </VStack>
              <Pressable
                onPress={() => navigation.navigate("Notifications")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                  zIndex: 5
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
                accessible={true}
                accessibilityLabel="account button"
                onPress={() => navigation.navigate("Account", {
                  points: points,
                  setPoints: setPoints,
                  voucherList: voucherList,
                  setVoucherList: setVoucherList,
                  redeemList: redeemList,
                  setRedeemList: setRedeemList
                })}
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
              <VStack style={{zIndex: 6}}>
                <Badge // bg="red.400"
                  colorScheme="warning" rounded="full" mb={-8} mr={-12} zIndex={10} variant="solid" alignSelf="flex-end" _text={{
                    fontSize: 11
                  }}>
                  2
                </Badge>
              </VStack>
              <Pressable
                onPress={() => navigation.navigate("Notifications")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                  zIndex: 5
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
                accessible={true}
                accessibilityLabel="account button"
                onPress={() => navigation.navigate("Account", {
                  points: points,
                  setPoints: setPoints,
                  voucherList: voucherList,
                  setVoucherList: setVoucherList,
                  redeemList: redeemList,
                  setRedeemList: setRedeemList
                })}
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
              <VStack style={{zIndex: 6}}>
                <Badge // bg="red.400"
                  colorScheme="warning" rounded="full" mb={-8} mr={-12} zIndex={10} variant="solid" alignSelf="flex-end" _text={{
                    fontSize: 11
                  }}>
                  2
                </Badge>
              </VStack>
              <Pressable
                onPress={() => navigation.navigate("Notifications")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 15,
                  backgroundColor: "#c6cccc",
                  borderRadius: 20,
                  padding: 8,
                  overflow: "hidden",
                  zIndex: 5
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
                accessible={true}
                accessibilityLabel="account button"
                onPress={() => navigation.navigate("Account", {
                  points: points,
                  setPoints: setPoints,
                  voucherList: voucherList,
                  setVoucherList: setVoucherList,
                  redeemList: redeemList,
                  setRedeemList: setRedeemList
                })}
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
