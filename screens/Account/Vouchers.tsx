import React, { useState } from "react";
import { Text, View } from '../../components/Themed';
import PointsDisplay from "../../components/PointsDisplay";

export default function Vouchers({points, vouchers}) {
  return (
    <View>
      <PointsDisplay points={0} vouchers={0} />
      <Text>Vouchers screen</Text>
    </View>
  )
}