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


const RestBottomBar = () => {
    const navigation = useNavigation();
    return (

        <SafeAreaView style={{
            flexDirection: "row",
            height: 80,
            paddingTop: 10,
            backgroundColor: "#c5d4c9",
            justifyContent: "space-evenly",
            }}>

            <TouchableOpacity onPress={() => navigation.navigate("RestHome")}>
                <Icon name="home" size={40} color="black" />
                <Text style={tw`text-center`}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RestLeaderboard")}>
                <Icon2 name="leaderboard" size={40} color="black" />
                <Text style={tw`text-center`}>Leaderboard</Text>
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

            <TouchableOpacity onPress={() => navigation.navigate("RestCampaigns")}>
                <Icon name="plus-box" size={40} color="black" />
                <Text style={tw`text-center`}>Campaigns</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RestAccount")}>
                <Icon name="account" size={40} color="black" />
                <Text style={tw`text-center`}>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RestHelpScreen")}>
                <Icon name="help-circle" size={40} color="black" />
                <Text style={tw`text-center`}>Help</Text>
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

export default RestBottomBar;
