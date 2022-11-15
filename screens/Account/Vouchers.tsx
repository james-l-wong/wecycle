import React, { useState } from "react";
import { Text, View } from '../../components/Themed';
import PointsDisplay from "../../components/PointsDisplay";
import { Box, Center, useColorModeValue } from "native-base";
import { Animated, Dimensions, Pressable, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import TabButtons from "../../components/TabButtons";

// const FirstRoute = () => <Center flex={1} my="4">
//     This is Tab 1
//   </Center>;

// const SecondRoute = () => <Center flex={1} my="4">
//     This is Tab 2
//   </Center>;

// const ThirdRoute = () => <Center flex={1} my="4">
//     This is Tab 3
//   </Center>;

// const FourthRoute = () => <Center flex={1} my="4">
//     This is Tab 4{' '}
//   </Center>;

// const initialLayout = {
//   width: Dimensions.get('window').width
// };
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
//   fourth: FourthRoute
// });

// function Example() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([{
//     key: 'first',
//     title: 'Tab 1'
//   }, {
//     key: 'second',
//     title: 'Tab 2'
//   }, {
//     key: 'third',
//     title: 'Tab 3'
//   }, {
//     key: 'fourth',
//     title: 'Tab 4'
//   }]);

//   const renderTabBar = props => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);
//     return <Box flexDirection="row">
//         {props.navigationState.routes.map((route, i) => {
//         const opacity = props.position.interpolate({
//           inputRange,
//           outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
//         });
//         const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
//         const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
//         return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
//               <Pressable onPress={() => {
//             console.log(i);
//             setIndex(i);
//           }}>
//                 <Animated.Text style={{
//               color
//             }}>{route.title}</Animated.Text>
//               </Pressable>
//             </Box>;
//       })}
//       </Box>;
//   };

//   return <TabView navigationState={{
//     index,
//     routes
//   }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
//     marginTop: StatusBar.currentHeight
//   }} />;
// }

function RedeemView() {
  return (
    <View><Text>redeem</Text></View>
  )
}

function VoucherView() {
  return (
    <View><Text>voucher</Text></View>
  )
}

export default function Vouchers({points, vouchers, onRedeem}) {
  const [showView1, setShowView1] = useState(true);
  return (
    <View>
      <PointsDisplay points={0} vouchers={0} />
      <Text>My Vouchers</Text>
      <Text>View all redeemed vouchers</Text>
      <TabButtons label1={"Redeem"} label2={"My Vouchers"} showView1={showView1} setShowView1={setShowView1} />
      {showView1 ? <RedeemView/> : <VoucherView/>}
    </View>
  )
}

// function SceneMap(arg0: { first: () => JSX.Element; second: () => JSX.Element; third: () => JSX.Element; fourth: () => JSX.Element; }) {
//   throw new Error("Function not implemented.");
// }
