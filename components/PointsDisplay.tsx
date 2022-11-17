import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';

export default function PointsDisplay({points, vouchers}) {
  return (
    <View style={styles.container}>
      <View
        accessible={true}
        accessibilityLabel={`you have ${points} points`}
        style={styles.textcont}>
        <Text style={[styles.text, styles.num]}>{points}</Text>
        <Text style={styles.text}>  points</Text>
      </View>
      <View
        accessible={true}
        accessibilityLabel={`you have ${vouchers} voucher${vouchers !== 1 ? "s" : ""}`}
        style={styles.textcont}>
        <Text style={[styles.text, styles.num]}>{vouchers}</Text>
        <Text style={styles.text}>  voucher{vouchers !== 1 ? "s" : ""}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "#708B75",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  text: {
    color: "white",
    backgroundColor: "#708B75",
    fontWeight: "500"
  },
  num: {
    fontSize: 25,
    backgroundColor: "#708B75",
  },
  textcont: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#708B75",
  }
});