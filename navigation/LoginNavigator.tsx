import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={Landing} />
      <Stack.Screen name="  " component={Login} />
      <Stack.Screen name="   " component={Register} />
    </Stack.Navigator>
  );
}
