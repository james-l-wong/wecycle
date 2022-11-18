import { StyleSheet, ScrollView , Image, TouchableOpacity} from 'react-native';
import React from "react";
import { useNavigation } from "@react-navigation/native";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Select } from "native-base";
import { Input, Stack, Box, Center, NativeBaseProvider, FormControl, Checkbox, Button} from "native-base";
import { CheckIcon } from "native-base";
import Services from "../screens/Services";

export default function TabTwoScreen() {
  const [service, setService] = React.useState("");
  const year1 = "< 1 year"
  const year2 = "< 3 years"
  const year3 = "> 3 years"
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <ScrollView> 
      <Text style={styles.title}>Enter Device Details </Text>
      <View style={styles.con2}> 
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 0,
            marginRight: 10,
          }}
          source={require("../assets/images/PhotoUpload.png")}
        />
        {/* <Button borderRadius="15">+</Button> */}
        <TouchableOpacity
        accessible={true}
        accessibilityLabel="Upload Picture Button"
        onPress={()=>setShowList(true)}
        style={[{borderRadius: 15, height: 40, width: 25, justifyContent: "center", alignItems: "center"},{backgroundColor: "#708B75"}]}>
        <Text style={{color:  "white" , fontWeight: "bold", fontSize: 18}}>+</Text>
      </TouchableOpacity>
        <Box marginLeft="1.5" paddingLeft= "1" backgroundColor = "#708B75" minH = "89px" minWidth= "181px" maxH = "89px" maxWidth= "181px" borderRadius="12" > <Text style={styles.texts} > Place your device on a flat surface and take a picture of it from 15 cms </Text> </Box>
      </View>
      <Box height = "100%" style = {styles2.container}>  
      <FormControl isInvalid w="90%" maxW="390px" marginBottom= "30px">
      
        
      <FormControl.Label>What model is your device</FormControl.Label>
       <Input accessible={true}
        accessibilityLabel="Enter Model Device" variant="rounded" placeholder="IPhone14, Samsung Galaxy S7" />
   
    </FormControl>
    <FormControl   maxW="350px" marginBottom= "30px">
    <FormControl.Label>How old is the device?</FormControl.Label>
    <Box alignItems="center">
      <Stack direction={{
      base: "row",
      md: "row"
    }} space={3} alignItems="flex-start">
      
        <Checkbox accessible={true}
        accessibilityLabel="Device is less than 1 year old" value="danger" colorScheme="info" >
         {year1}
        </Checkbox>
        <Checkbox  accessible={true}
        accessibilityLabel="Device is less than 3 years old" value="info" colorScheme="info" >
        {year2}
        </Checkbox>
        <Checkbox accessible={true}
        accessibilityLabel="Device is greater than 3 years old"  value="orange" colorScheme="info" >
        {year3}
        </Checkbox>
      </Stack>
    </Box>
    </FormControl>
    <FormControl isInvalid w="90%" maxW="390px" marginBottom= "30px">
      
        
      <FormControl.Label>Please describe the condition of your device below</FormControl.Label>
       <Input accessible={true}
        accessibilityLabel="Enter the condition of your device" variant="rounded" placeholder="Cracked screen, Poor Battery Health, Scratches on back, Camera in Excellent Condition " />
   
    </FormControl>
    <Center>
    <FormControl isInvalid  maxW="390px" marginBottom= "30px">
    <FormControl.Label>Who is the Manufacturer</FormControl.Label>
      <Box>
        <Select selectedValue={service} minWidth="250"   accessibilityLabel="Choose Manufacturer " placeholder="Choose Manufacturer" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Apple" value="apple" />
          <Select.Item label="Samsung" value="samsung" />
          <Select.Item label="LG" value="lg" />
          <Select.Item label="Dell" value="Dell" />
          <Select.Item label="Other" value="other" />
        </Select>
      </Box>
      </FormControl>
    </Center>
    <FormControl   maxW="350px" marginBottom= "30px">
    <FormControl.Label>What type of device is it?</FormControl.Label>
    <Box alignItems="center" >
      <Stack direction={{
      base: "row",
      md: "row"
    }} space={3} alignItems="flex-start">
      
        <Checkbox accessible={true}
        accessibilityLabel="Is you device a phone"  value="danger" colorScheme="info" >

          Phone
        </Checkbox>
        <Checkbox accessible={true}
        accessibilityLabel="Is your device a laptop" value="info" colorScheme="info" >
          Laptop
        </Checkbox>
        <Checkbox accessible={true}
        accessibilityLabel="Is your device neither a laptop or phone"  value="orange" colorScheme="info" >
          Other
        </Checkbox>
      </Stack>
    </Box>
    </FormControl>

  
    </Box>
    <Center flex={1} px="3" marginTop= "30px">
                {/* <Button size={"lg"} borderRadius="10" onPress={() => { document.location.href = "Services.tsx"; }}> Submit </Button> */}
                <TouchableOpacity
                accessible={true}
                accessibilityLabel="Submit button for device details" 
        onPress={()=>navigation.navigate("ServiceList")}
        style={[{borderRadius: 15, height: 50, width: 150, justifyContent: "center", alignItems: "center"},{backgroundColor: "#708B75"}]}>
        <Text style={{color:  "white" , fontWeight: "bold", fontSize: 18}}>Submit</Text>
      </TouchableOpacity>
            </Center>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  con2: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'row',
    marginBottom:20

  },
  texts: {
    color:"white"
  },
  separator: {
    marginVertical: 30,
    marginTop: 30,
    height: 1,
    width: '80%',
  },
});

const styles2 = StyleSheet.create ({
  container: {
     flex:1,
     flexDirection: 'column',
     justifyContent: 'space-between',
     alignItems: 'start',
     height: '100%',
  }
})