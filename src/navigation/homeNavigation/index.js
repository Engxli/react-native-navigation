import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/home/HomeScreen";
import ItemDetail from "../../screens/home/ItemDetail";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="itemDetail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
