import { StyleSheet, Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from "react";
import React from 'react'
import { TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';

import { Modal, VStack, HStack, Radio} from "native-base";
import { Input, Stack, Box, Center, NativeBaseProvider, extendTheme, FormControl, Checkbox, Button} from "native-base";
import TabButtons from "../components/Tabbuttons"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Call from "../assets/icons/Call"
import Email from "../assets/icons/Email"
import Website from "../assets/icons/Webstime"
import Save from "../assets/icons/save"
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

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [showModal, setShowModal] = useState(false);
  const [showList,setShowList] = useState(false)
  return (
    <View style={styles.container}>
     
     {/* <View style={styles.mapContainer}><MapView provider={undefined} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}  style={styles.map} /></View> */}
        
      <Text style={styles.title}>All availibile Services</Text> 
      <Text style = {styles.normal}> View information about the services avaibile {'\n'} for your devices</Text>

      <View style={{ flexDirection: "row", justifyContent: "center"}}>
      
      <TouchableOpacity
        onPress={()=>setShowList(true)}
        style={[{borderRadius: 15, height: 50, width: 150, justifyContent: "center", alignItems: "center"},{backgroundColor: setShowList ?"#708B75": "#D9D9D9"}]}>
        <Text style={{color: setShowList ? "white" : "black", fontWeight: "bold", fontSize: 18}}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>setShowList(false)}
        style={[{borderRadius: 15, height: 50, width: 150, justifyContent: "center", alignItems: "center"},{backgroundColor: !setShowList == false ?"#D9D9D9":"#D9D9D9"}]}>
        <Text style={{color: !setShowList ? "white" : "black", fontWeight: "bold", fontSize: 18}}>Map</Text>
      </TouchableOpacity>
    </View>
   
     {showList && <View> 
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
        <View style={{ backgroundColor: "#444B6E",  borderRadius:"10" , padding:15, justifyContent: 'center'}}>
         
            <Text style={styles.text}>Trade Electronics</Text>
            <Text style={styles.text}>
             Pawn Shop 10 KM
            </Text>
            <StarRating
        rating= "5"
        color = "#FFFFFF"
        />
         
        </View>
        <View style = {styles.cm2}>
          <View> 
            <Call onPress={() => setShowModal(true)} /> 
          {/* <Text> Call </Text> */}
          </View>
          <View> 
            <Email onPress={() => setShowModal(true)} /> 
          {/* <Text> Email </Text> */}
          </View>
          <View> 
            <Website onPress={() => setShowModal(true)} /> 
          {/* <Text> Website </Text> */}
          </View>
          <View> 
            <Save onPress={() => setShowModal(true)} /> 
          {/* <Text fontSize="1"> Save </Text> */}
          </View>
        </View>
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
        <View style={{ backgroundColor: "#444B6E",  borderRadius:"10" , padding:15, justifyContent: 'center'}}>
         
            <Text style={styles.text}>Parramatta e-Waste</Text>
            <Text style={styles.text}>
             Collection 2 KM
            </Text>
            <StarRating
        rating= "3"
        color = "#FFFFFF"
        />
         
        </View>
        <View>
        <Button  borderRadius="10" margin= "1"  onPress={() => setShowModal(true)}>  Contact Information </Button>
        
        </View>
        </View>
      </View>
    
      <Modal isOpen={showModal}  onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Contact Details</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Phone Number</Text>
                <Text color="blueGray.400">+610498213291</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Email</Text>
                <Text color="blueGray.400">tradeelec@gmail.com</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Location</Text>
                <Text color="green.500">43, High Street Kensignton,{'\n'}  2033,Sydney, NSW </Text> 
               

              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal(false);
          }}>
              close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
        </View> }
    </View>
    
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
    
  },
  cm2: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },

  normal: {
    margin: 8,
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