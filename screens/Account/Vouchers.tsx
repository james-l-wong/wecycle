import React, { useState } from "react";
import { Text, View } from '../../components/Themed';
import PointsDisplay from "../../components/PointsDisplay";
import TabButtons from "../../components/TabButtons";
import { StyleSheet } from "react-native";

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
  }
})