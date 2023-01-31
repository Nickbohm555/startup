import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTab";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustHelpScreen from "../screens/CustHelpScreen";
import HomeScreen from "../screens/HomeScreen";


const Drawer = createDrawerNavigator();

const SideTab = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                backgroundColor: 'white',
                width: 240,
                },
                drawerActiveTintColor: 'orange',
                headerShown: false,
            }}>
            <Drawer.Screen 
                name='Main' 
                component={BottomTab}
                options={{ drawerIcon: makeIconRender("home"),
                headerShown: false}} />
            <Drawer.Screen 
                name='Help' 
                component={CustHelpScreen} 
                options={{ drawerIcon: makeIconRender("help-circle")}} />
            <Drawer.Screen 
                name='Log Out' 
                component={HomeScreen} 
                options={{ drawerIcon: makeIconRender("logout")}} />

            
        </Drawer.Navigator>
        
        // <Drawer.Navigator initialRouteName="Home">
        //     <Drawer.Screen name="Rewards" component={RewardsScreen} />
        //     <Drawer.Screen name="Restaurants" component={CustRestaurantsScreen} />
        // </Drawer.Navigator>
    );
};

function DrawerView() {
    return (
        <View>
            <Text>
                Drawer View
            </Text>
        </View>
    )
}

function makeIconRender(name) {
    return ({ color, size }) => (
      <MaterialCommunityIcons name={name} color={color} size={size} />
    );
}

export default SideTab;