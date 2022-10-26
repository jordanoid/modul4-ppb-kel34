import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "react-native-gesture-handler";

const BottomTab = createBottomTabNavigator( 
);

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: () =>
            <FontAwesomeIcon icon={faHome} /> 
        }}/>
        <BottomTab.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarIcon: () =>
            <FontAwesomeIcon icon={faUser} /> 
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}