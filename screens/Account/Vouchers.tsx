import React, { useState, useEffect } from "react";
import { Text, View } from '../../components/Themed';
import PointsDisplay from "../../components/PointsDisplay";
import TabButtons from "../../components/TabButtons";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Vouchers({route, navigation}) {
  const {points, vouchers, onRedeem, redeemList, setRedeemList, voucherList, setVoucherList} = route?.params || {};
  const [showView1, setShowView1] = useState(onRedeem);
  const [vList, setVList] = useState(voucherList);
  const [rList, setRList] = useState(redeemList);

  useEffect(()=>{
    setVoucherList(vList);
    setRedeemList(rList);
  });

  function RedeemItem({id, Logo, cost, pts}) {
    return (
      <>
      <View style={{flexDirection: "row", justifyContent: "space-evenly", height: 100, alignItems: "center"}}>
        <Logo/>
        <Text style={{fontSize: 30, fontWeight: "bold", width: 60, textAlign: "center"}}>${cost}</Text>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 16, marginBottom: 5}}>{pts} pts</Text>
          <TouchableOpacity
            style={{backgroundColor: "#D9D9D9", width: 80, height: 30, borderRadius: 7, justifyContent: "center", alignItems: "center"}}
            onPress={() => {
              // setVoucherList([...voucherList, redeemList.filter((item)=>item.id === id)[0]]);
              // setRedeemList(redeemList.filter(item=>item.id !== id));
              setVList([...vList, rList.filter((item)=>item.id === id)[0]]);
              setRList(rList.filter(item=>item.id !== id));
              
            }}
          >
            <Text style={{fontSize: 12}}>Redeem</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </>
    )
  }
  
  function VoucherItem({Logo, cost, id}) {
    return (
      <>
      <View style={{flexDirection: "row", justifyContent: "space-evenly", height: 100, alignItems: "center"}}>
        <Logo/>
        <Text style={{fontSize: 30, fontWeight: "bold", width: 60, textAlign: "center"}}>${cost}</Text>
        <TouchableOpacity
          style={{backgroundColor: "#D9D9D9", width: 50, height: 40, borderRadius: 7, justifyContent: "center", alignItems: "center"}}
          onPress={()=> {
            navigation.navigate("Voucher Barcode", {
              id: id,
              Logo: Logo,
              cost: cost
            });
          }}
        >
          <Image
            style={{width: 45, height: 45}}
            source={require("../../assets/images/barcodeicon.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </>
    )
  }

  function RedeemView() {
    return (
      <>
        {rList.map((item, i) => {
          return (
            <RedeemItem key={i} id={item.id} Logo={item.pic} cost={item.cost} pts={item.pts} />
          )
        })}
      </>
    )
  }

  function VoucherView() {
    return (
      <>
        {vList.map((item, id) => {
          return (
            <VoucherItem key={id} Logo={item.pic} cost={item.cost} id={item.id} />
          )
        })}
      </>
    )
  }

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