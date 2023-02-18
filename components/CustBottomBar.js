import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ImageBackground } from 'react-native';
import CustRestaurantsRow from '../components/CustRestaurantsRow';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SelectList } from 'react-native-dropdown-select-list';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";


const CustBottomBar = () => {
    const navigation = useNavigation();
    return (

        <SafeAreaView style={{
            flexDirection: "row",
            height: 80,
            paddingTop: 10,
            backgroundColor: "#c5d4c9",
            justifyContent: "space-evenly",
            }}>

            <TouchableOpacity onPress={() => navigation.navigate("CustHome")}>
                <Icon name="home" size={40} color="black" />
                <Text style={tw`text-center`}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("CustRestaurantsScreen")}>
                <Icon name="silverware-fork-knife" size={40} color="black" />
                <Text style={tw`text-center`}>Restaurants</Text>
            </TouchableOpacity>
            {/* <View style={{
                backgroundColor: "white",
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: "green",
                }}>
                <TouchableOpacity onPress={() => navigation.navigate("RewardsScreen")}>
                    <Icon name="cash" size={70} color="black" />
                </TouchableOpacity>
            </View> */}

            <TouchableOpacity onPress={() => navigation.navigate("RewardsScreen")}>
                <Icon name="cash" size={40} color="black" />
                <Text style={tw`text-center`}>Rewards</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("CustRankingsScreen")}>
                <Icon2 name="leaderboard" size={40} color="black" />
                <Text style={tw`text-center`}>Rankings</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("CustAccountScreen")}>
                <Icon name="account" size={40} color="black" />
                <Text style={tw`text-center`}>Account</Text>
            </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
                    <ImageBackground
                        source={(require("../images/drawerIcon.png"))}
                        style={{width: 75, height: 75, paddingLeft: 175}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen") }>
                    <ImageBackground
                        source={(require("../images/homeIcon.png"))}
                        style={{width: 75, height: 75, paddingLeft: 175}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
                    <ImageBackground
                        source={(require("../images/CuisineIcon.png"))}
                        style={{width: 75, height: 75, paddingLeft: 175}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
                    <ImageBackground
                        source={(require("../images/CustRewardsIcon.jpeg"))}
                        style={{width: 75, height: 75, paddingLeft: 175}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
                    <ImageBackground
                        source={(require("../images/rankingsIcon.png"))}
                        style={{width: 75, height: 75, paddingLeft: 175}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
                    <ImageBackground
                        source={(require("../images/RestaurantManagerIcon.png"))}
                        style={{width: 75, height: 75, paddingLeft: 175}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity> */}
                
                                  
        </SafeAreaView>
    );
}

export default CustBottomBar;
