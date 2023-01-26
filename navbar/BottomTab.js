import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustRestaurantsScreen from '../screens/CustRestaurantsScreen';
import RewardsScreen from '../screens/RewardsScreen';
import CustRankingsScreen from '../screens/CustRankingsScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{ tabBarIcon: makeIconRender("home") }}
        />
        <Tab.Screen
          name="Restaurants"
          component={CustRestaurantsScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
      </Tab.Navigator>
    );
};

function makeIconRender(name) {
    return ({ color, size }) => (
      <MaterialCommunityIcons name={name} color={color} size={size} />
    );
  }

export default BottomTab;