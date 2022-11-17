import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
export default function MenuButton({label, colour, pressFn}) {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={`${label} button`}
      onPress={pressFn}
      style={[styles.menuButton, {backgroundColor: colour}]}>
      <Text style={label == 'Log Out' ? { fontSize: 20, color: '#C60000' } : { fontSize: 20, color: '#fff', fontWeight: 'bold' }}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuButton: {
    width: 350,
    height: 60,
    borderRadius: 12,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
})