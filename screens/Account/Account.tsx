import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, LogBox } from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from '../../components/Themed';
import MenuButton from './MenuButton';
import PointsDisplay from '../../components/PointsDisplay';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function ProfileImage() {
  return (
    <View
      accessible={true}
      accessibilityLabel="profile image"
      style={styles.circle}>
      <FontAwesome
        style={{ marginTop: 20 }}
        name="user"
        size={50}
      />
      <FontAwesome
        style={styles.plus}
        name="plus-circle"
        size={25}
      />
    </View>
  )
}

export default function Account({ route, navigation }) {
  const { points, setPoints, redeemList, setRedeemList, voucherList, setVoucherList } = route?.params || {};
  const [ps, setPs] = useState(points);
  const [vList, setVList] = useState(voucherList);
  const [rList, setRList] = useState(redeemList);

  useEffect(() => {
    setPoints(ps);
    setVoucherList(vList);
    setRedeemList(rList);
  }, [ps, vList])

  const Buttons = () => (
    <View>
      <MenuButton
        label={"Redeem Vouchers"}
        colour={"#708B75"}
        pressFn={() => navigation.navigate("Vouchers", {
          points: ps,
          setPoints: setPs,
          onRedeem: true,
          redeemList: rList,
          voucherList: vList,
          setRedeemList: setRList,
          setVoucherList: setVList
        })}
      />
      <MenuButton
        label={"My Vouchers"}
        colour={"#708B75"}
        pressFn={() => navigation.navigate("Vouchers", {
          points: ps,
          setPoints: setPs,
          onRedeem: false,
          redeemList: rList,
          voucherList: vList,
          setRedeemList: setRList,
          setVoucherList: setVList
        })}
      />
      <MenuButton
        label={"Settings"}
        colour={"#708B75"}
        pressFn={() => navigation.navigate("Settings")}
      />
      <View style={{ height: "15%" }}></View>
      <MenuButton
        label={"Log Out"}
        colour={"#D9D9D9"}
        pressFn={() => navigation.navigate(" ")}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <PointsDisplay points={ps} vouchers={vList.length} />
      <View style={styles.info}>
        <ProfileImage />
        <View style={styles.infotext}>
          <Text style={styles.title}>Jane Doe</Text>
          <Text style={{ fontSize: 16 }}>jane.doe@email.com</Text>
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Buttons />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'/*: 'auto'*/} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: '80%',
  },
  circle: {
    backgroundColor: 'lightgrey',
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plus: {
    marginLeft: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 25,
    paddingLeft: 2
  },
  info: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 50,
  },
  infotext: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 90
  }
});
