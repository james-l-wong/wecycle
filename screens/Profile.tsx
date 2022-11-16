import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import MenuButton from './Account/MenuButton';

function ProfileImage() {
  return (
    <View style={styles.circle}>
      <FontAwesome
        style={{marginTop: 20}}
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

export default function ModalScreen({navigation}) {
  const Buttons = () => (
    <View>
      <MenuButton
        label={"Redeem Vouchers"}
        colour={"#708B75"}
        pressFn={()=>navigation.navigate("Vouchers")}
      />
      <MenuButton
        label={"Your Vouchers"}
        colour={"#708B75"}
        pressFn={()=>navigation.navigate("Vouchers")}
      />
      <MenuButton
        label={"Settings"}
        colour={"#708B75"}
        pressFn={()=>navigation.navigate("Settings")}
      />
      <MenuButton
        label={"Log Out"}
        colour={"#D9D9D9"}
        pressFn={()=>alert("log out")}
      />
    </View>
  );
  return (
      <View style={styles.container}>
        <View style={styles.info}>
          <ProfileImage/>
          <View style={styles.infotext}>
            <Text style={styles.title}>Username</Text>
            <Text style={{fontSize:16}}>Email</Text>
          </View>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Buttons/>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'/*: 'auto'*/} />
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
  },
  separator: {
    marginVertical: 30,
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
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 40
  },
  infotext: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 90
  }
});
