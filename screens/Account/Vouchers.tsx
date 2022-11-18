import React, { useState, useEffect } from "react";
import { Text, View } from '../../components/Themed';
import PointsDisplay from "../../components/PointsDisplay";
import TabButtons from "../../components/Tabbuttons";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Alert, VStack, HStack } from "native-base";

export default function Vouchers({route, navigation}) {
  const {points, setPoints, onRedeem, redeemList, setRedeemList, voucherList, setVoucherList} = route?.params || {};
  const [showView1, setShowView1] = useState(onRedeem);
  const [vList, setVList] = useState(voucherList);
  const [rList, setRList] = useState(redeemList);
  const [showMsg, setShowMsg] = useState(false);
  const [ps, setPs] = useState(points);
  const [msg, setMsg] = useState("");

  useEffect(()=>{
    setPoints(ps);
    setVoucherList(vList);
    setRedeemList(rList);
    if (showMsg) {
      const timer = setTimeout(()=>setShowMsg(false), 2000);
      return () => clearTimeout(timer);
    }
  });

  function RedeemMessage({isSuccess}) {
    return (
      <Alert 
        accessible={true}
        accessibilityLabel={`${isSuccess? "success": "warning"} popup says ${msg}`}
        style={{ alignSelf: "center", position: "absolute", bottom: 50}} w="85%" variant={"left-accent"} colorScheme={isSuccess? "success" : "warning"} status={isSuccess? "success" : "warning"}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Text>
                {msg}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
    )
  }

  function RedeemItem({id, Logo, cost, pts}) {
    function clickRedeem() {
      if (ps >= pts) {
        setVList([...vList, rList.filter((item)=>item.id === id)[0]]);
        setRList(rList.filter(item=>item.id !== id));
        setPs(ps-pts);
        setMsg(`Redeemed ${id} voucher`)
      } else {
        setMsg("Insufficient points to redeem");
      }
      setShowMsg(true);
    }

    return (
      <>
      <View
        accessible={true}
        accessibilityLabel={`Redeemable $${cost} ${id} voucher for ${pts} points`}
        style={{flexDirection: "row", justifyContent: "space-evenly", height: 100, alignItems: "center"}}>
        <Logo/>
        <Text style={{fontSize: 30, fontWeight: "bold", width: 60, textAlign: "center"}}>${cost}</Text>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 16, marginBottom: 5}}>{pts} pts</Text>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={`Redeem button for $${cost} ${id} voucher worth ${pts} points`}
            style={{backgroundColor: "#D9D9D9", width: 80, height: 30, borderRadius: 7, justifyContent: "center", alignItems: "center"}}
            onPress={clickRedeem}
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
      <View 
        accessible={true}
        accessibilityLabel={`Your $${cost} ${id} voucher`}
        style={{flexDirection: "row", justifyContent: "space-evenly", height: 100, alignItems: "center"}}>
        <Logo/>
        <Text style={{fontSize: 30, fontWeight: "bold", width: 60, textAlign: "center"}}>${cost}</Text>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={`Barcode button for your $${cost} ${id} voucher`}
          style={{backgroundColor: "#D9D9D9", width: 50, height: 40, borderRadius: 7, justifyContent: "center", alignItems: "center"}}
          onPress={()=> {
            navigation.navigate("Voucher Barcode", {
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
      <PointsDisplay points={ps} vouchers={vList.length} />
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
      {showMsg ? <RedeemMessage isSuccess={msg.startsWith("I") ? false : true} /> : <></>}
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