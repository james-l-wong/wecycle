import React, { useState } from "react";
import { Text, View } from '../../components/Themed';
import PointsDisplay from "../../components/PointsDisplay";
import TabButtons from "../../components/TabButtons";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";

function ColesLogo() {
  return (
    <Image
      style={{width: 117, height: 36}}
      source={require("../../assets/images/coles.png")}
    />
  )
}

function WoolLogo() {
  return (
    <Image
      style={{width: 117, height: 28}}
      source={require("../../assets/images/woolworths.png")}
    />
  )
}

function OfficeLogo() {
  return (
    <Image
      style={{width: 117, height: 31}}
      source={require("../../assets/images/officeworks.png")}
    />
  )
}

function MyerLogo() {
  return (
    <Image
      style={{width: 117, height: 31}}
      source={require("../../assets/images/myer.png")}
    />
  )
}

function RedeemItem({Logo, cost, pts}) {
  return (
    <>
    <View style={{flexDirection: "row", justifyContent: "space-evenly", height: 100, alignItems: "center"}}>
      <Logo/>
      <Text style={{fontSize: 30, fontWeight: "bold"}}>${cost}</Text>
      <View style={{alignItems: "center"}}>
        <Text style={{fontSize: 16, marginBottom: 5}}>{pts} pts</Text>
        <TouchableOpacity style={{backgroundColor: "#D9D9D9", width: 80, height: 30, borderRadius: 7, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 12}}>Redeem</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </>
  )
}

function RedeemView() {
  return (
    <>
    <RedeemItem Logo={ColesLogo} cost={5} pts={1000} />
    <RedeemItem Logo={WoolLogo} cost={5} pts={1000} />
    <RedeemItem Logo={OfficeLogo} cost={15} pts={2000} />
    </>
  )
}

function VoucherItem({Logo, cost}) {
  return (
    <>
    <View style={{flexDirection: "row", justifyContent: "space-evenly", height: 100, alignItems: "center"}}>
      <Logo/>
      <Text style={{fontSize: 30, fontWeight: "bold"}}>${cost}</Text>
      <TouchableOpacity style={{backgroundColor: "#D9D9D9", width: 50, height: 40, borderRadius: 7, justifyContent: "center", alignItems: "center"}}>
        <Image
          style={{width: 32, height: 32}}
          source={require("../../assets/images/barcodeicon.png")}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </>
  )
}

function VoucherView() {
  return (
    <View>
      <VoucherItem Logo={MyerLogo} cost={25} />
    </View>
  )
}

export default function Vouchers({points, vouchers, onRedeem, redeemList, setRedeemList, voucherList, setVoucherList}) {
  const [showView1, setShowView1] = useState(true);
  // const [redeemList, setRedeemList] = useState({});
  // const [voucherList, setVoucherList] = useState({});

  return (
    <View style={{height: "100%"}}>
      <PointsDisplay points={0} vouchers={0} />
      {!showView1 ?
      <>
        <Text style={styles.title}>My Vouchers</Text>
        <Text style={styles.infotxt}>View all redeemed vouchers</Text>
      </>
      : <>
        <Text style={styles.title}>Redeem Vouchers</Text>
        <Text style={styles.infotxt}>View all vouchers for redemption</Text>
      </>
      }
      <TabButtons label1={"Redeem"} label2={"My Vouchers"} showView1={showView1} setShowView1={setShowView1} />
      {showView1 ? <RedeemView/> : <VoucherView/>}
    </View>
  )
}

const styles = StyleSheet.create({
  infotxt: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20
  },
  separator: {
    height: 1,
    width: '100%',
  },
})