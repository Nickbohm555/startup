import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustRestaurantsScreen from '../screens/CustRestaurantsScreen';
import CustHome from '../screens/CustHome';
import RewardsScreen from '../screens/RewardsScreen';
import CustRankingsScreen from '../screens/CustRankingsScreen';
import CustAccountScreen from '../screens/CustAccountScreen';

const Tab = createBottomTabNavigator();

const CustomRewardButton = ({children, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center', }}
            onPress={onPress}
        >
            <View style={{
              width: 70,
              height: 70,
              borderRadius: 35,
            }}>
              <ImageBackground>
                <Image
                  source={require('../images/CustRewardsIcon.jpeg')}
                  resizeMode="contain"
                  style={{
                    width: 80,
                    height: 80,
                    alignSelf: 'center',
                  }}
                />
              </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const BottomTab = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            tabActiveTintColor: 'orange',
            tabBarStyle: {
              backgroundColor: '#DDFFD8',
              height: 100,
          }}}>
          <Tab.Screen
            name="Home"
            component={CustHome}
            options={{ 
              tabBarIcon: makeIconRender("home"),
              headerShown: false, }}
          />
          <Tab.Screen
            name="Restaurants"
            component={CustRestaurantsScreen}
            options={{ tabBarIcon: makeIconRender("food"),
            headerShown: false, }}
          />
          <Tab.Screen
            name="Rewards"
            component={RewardsScreen}
            options={{headerShown: false,
            tabBarButton: (props) => (
              <CustomRewardButton {...props} />
                ), }}
          />
          <Tab.Screen
            name="Rankings"
            component={CustRankingsScreen}
            options={{ tabBarIcon: makeIconRender("podium"),
            headerShown: false, }}
          />
          <Tab.Screen
            name="Account"
            component={CustAccountScreen}
            options={{ tabBarIcon: makeIconRender("account"),
            headerShown: false, }}
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