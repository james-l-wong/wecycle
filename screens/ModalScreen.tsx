import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

function MenuButton({label, colour}) {
  return (
    <TouchableOpacity
      onPress={() => alert('Hello, world!')}
      style={[styles.menuButton, {backgroundColor: colour}]}>
      <Text style={label == 'Log Out' ? { fontSize: 20, color: '#C60000' } : { fontSize: 20, color: '#fff', fontWeight: 'bold' }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Username</Text>
      <Text style={{fontSize:16}}>Email</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}
      <MenuButton label={"Redeem Vouchers"} colour={"#708B75"} />
      <MenuButton label={"Your Vouchers"} colour={"#708B75"} />
      <MenuButton label={"Settings"} colour={"#708B75"} />
      <MenuButton label={"Log Out"} colour={"#D9D9D9"} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
  menuButton: {
    width: 350,
    height: 60,
    borderRadius: 12,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
