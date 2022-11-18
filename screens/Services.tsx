import { StyleSheet, Image, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from "react";
import React from 'react'
import { TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import ModalCustom from "../components/ModalCustom"
import { Modal, VStack, HStack, Radio} from "native-base";
import { Input, Stack, Box, Center, NativeBaseProvider, extendTheme, FormControl, Checkbox, Button} from "native-base";
import TabButtons from "../components/Tabbuttons"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Call from "../assets/icons/Call"
import Email from "../assets/icons/Email"
import Website from "../assets/icons/Webstime"
import Save from "../assets/icons/save"

const s = ()=> {
  console.log("Hi")
}

export default function TabTwoScreen() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB79oj7pFK0pdAAhaXxlgaT5RXIxvBA-XU "
  })

  const [map, setMap] = React.useState(null)
  const [rating, setRating] = useState(0);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [showCallModal, setShowCallModal] = useState(false);
  const [showWebsiteModal, setShowWebsiteModal] = useState(false);
  const [showEmailModal, setshowEmailModall] = useState(false);
  const [showSaveModal, setshowSaveModal] = useState(false);

  const [showList,setShowList] = useState(true);

  function ContactOptions() {
    return (
      <View style = {styles.cm2}>
          <View style={{width: 55, alignItems: "center"}}> 
            <Call onPress={() => setShowCallModal(true)} /> 
          <Text style={{fontSize: 8}}> Call </Text>
          </View>
          <View style={{width: 55, alignItems: "center"}}> 
            <Email onPress={() => setshowEmailModall(true)} /> 
          <Text style={{fontSize: 8}}> Email </Text>
          </View>
          <View style={{width: 55, alignItems: "center"}}> 
            <Website onPress={() => setShowWebsiteModal(true)} /> 
          <Text style={{fontSize: 8}}> Website </Text>
          </View>
          <View style={{width: 55, alignItems: "center"}}> 
            <Save onPress={() => setshowSaveModal(true)} /> 
          <Text style={{fontSize: 8}}> Save </Text>
          </View>
        </View>
    );
  }

  return (
    <View style={styles.container}>
     <ScrollView> 
    
      <View style= {{marginLeft:20}}>  
      <Text style={styles.title}>All Available Services</Text> 
      <Text style = {styles.normal}> View information about the services available {'\n'} for your devices</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center"}}>
      
    </View>

    <TabButtons label1={"List"} label2={"Map"} showView1={showList} setShowView1={setShowList} />
    { !showList && <View >
       <View style={styles.mapContainer}><MapView provider={undefined} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}  style={styles.map} /></View> 
    </View>}
     {showList && 
     <View> 
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 10,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 0,
            marginRight: 5,
          }}
          source={require("../assets/images/Unknown.png")}
        />
        <View style = {{display: "flex",
          flexDirection: "column",}}> 
        <View style={{ backgroundColor: "#444B6E",  borderRadius: 10 , padding:15, justifyContent: 'center'}}>
         
            <Text style={styles.text}>Trade Electronics</Text>
            <Text style={styles.text}>
             Pawn Shop {'               '}10 KM
            </Text>
            <StarRating
        rating= "5"
        color = "#FFFFFF"
        onChange={ setRating}
        />
         
        </View>
        <ContactOptions/>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 10,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
           
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 0,
            marginRight: 5,
          }}
          source={require("../assets/images/reddit-logo.png")}
        />
        <View style = {{display: "flex",
          flexDirection: "column",}}> 
        <View style={{ backgroundColor: "#444B6E",  borderRadius: 10 , padding:15, justifyContent: 'center'}}>
         
            <Text style={styles.text}>Redditor - iBuyFone3</Text>
            <Text style={styles.text}>
             Reddit {'                 '}5km
            </Text>
            <StarRating
        rating= "3"
        color = "#FFFFFF"
        onChange={setRating}
        />
         
        </View>
        <ContactOptions/>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 10,
          // marginLeft: 20,
          // marginRight: 20,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 0,
            marginRight: 5,
          }}
          source={require("../assets/images/CityofPara.png")}
        />
        <View style = {{display: "flex",
          flexDirection: "column",}}> 
        <View style={{ backgroundColor: "#444B6E",  borderRadius: 10 , padding:15, justifyContent: 'center'}}>
         
            <Text style={styles.text}>Parramatta e-Waste</Text>
            <Text style={styles.text}>
             Collection {'             '} 2 KM
            </Text>
            <StarRating
        rating= "4"
        color = "#FFFFFF"
        onChange={setRating}
        />
         
        </View>
        <ContactOptions/>
        </View>
      </View>
      <ModalCustom name={"Calling the Service"} context = {showCallModal} setter = {setShowCallModal}/>
      <ModalCustom name={"Opening Email Application on your device"} context = {showEmailModal} setter = {setshowEmailModall}/>
      <ModalCustom name={"Opening Website of the service"} context = {showWebsiteModal} setter = {setShowWebsiteModal}/>
      <ModalCustom name={"Saving the Service"} context = {showSaveModal} setter = {setshowSaveModal}/>
  
        </View> }
        </ScrollView> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 390,
    width: 390,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    margin:20,

  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width:"100%"
    
  },
  cm2: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    padding:4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
   
  },

  normal: {
    marginTop: 10,
    marginBottom:20,
   
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  n : {
    height: '128px',
    width: '327px',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 20,
    color:"white"
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
});