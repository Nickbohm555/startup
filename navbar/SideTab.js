import { createDrawerNavigator } from "@react-navigation/drawer";
import CustRestaurantsScreen from '../screens/CustRestaurantsScreen';
import RewardsScreen from '../screens/RewardsScreen';
import BottomTab from "./BottomTab";
import { View, Text } from "react-native";


const Drawer = createDrawerNavigator();

const SideTab = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerView {...props} />}>
            <Drawer.Screen name='BottomTab' component={BottomTab} />
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

export default SideTab;