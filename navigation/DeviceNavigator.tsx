import { createStackNavigator } from "@react-navigation/stack";
import DeviceDetails from "../screens/DeviceDetails";

const Stack = createStackNavigator();

export function DeviceNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={DeviceDetails} />
    </Stack.Navigator>
  );
}
