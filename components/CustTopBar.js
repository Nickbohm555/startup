import tw from 'tailwind-react-native-classnames';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ImageBackground } from 'react-native';
import CustRestaurantsRow from '../components/CustRestaurantsRow';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import Icon from "react-native-vector-icons/Ionicons";

// Supabase
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase';
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const CustTopBar = () => {
    const navigation = useNavigation();

    // Supabase
    const [custInfo, setcustInfo] = useState([{"name": "", "pronoun": "", "customerage": "", "location": "", "walletaddress": "", "nationality": ""}]);

    const getRestaurants = async () => {
    let { data: custInfo, error } = await supabase
      .from('customers')
      .select('*')

      return custInfo;
    }
    
    useEffect(() => {
        getRestaurants().then((custInfo) => {
            setcustInfo(custInfo);
        });
      }, []);

    return (
        <View style={{
            flexDirection: "row",
            height: 120,
            paddingTop: 50,
            paddingLeft: 125,
            paddingRight: 10,
            backgroundColor: "#c5d4c9",
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} >
                <Icon name="menu" size={40} color="black" style={{paddingRight: 90}}/>
            </TouchableOpacity> */}
            {/* <Button onPress={navigation.openDrawer} title="Open navigation drawer" /> */}
            <Image
                style={{
                    width: 150,
                    height: 150,
                    paddingTop: 10,
                    resizeMode: "contain",
                    alignSelf: "center",
                }}
                source={require("../images/CEATY_Logo.png")}
            />
            <View style={tw`mt-5 ml-10 mr-2 mb-5`}>
                <View style={tw`bg-white flex-row`}>
                        <Image
                        style={{
                            width: 15,
                            height: 15,
                            paddingRight: 10,
                            resizeMode: "contain",
                            alignSelf: "center",
                        }}
                        source={require("../images/topBarIcon1.png")}
                        />
                    <Text style={{
                        fontSize: 11,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "right",
                        paddingLeft: 5,
                        }}>{custInfo[0]['walletaddress']}</Text>
                </View>
                
                <View style={tw`bg-white flex-row mt-2`}>
                        <Image
                        style={{
                            width: 15,
                            height: 15,
                            paddingRight: 10,
                            resizeMode: "contain",
                            alignSelf: "center",
                        }}
                        source={require("../images/topBarIcon2.png")}
                        />
                    <Text style={{
                        fontSize: 11,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "right",
                        paddingLeft: 5,
                        paddingRight: 5,
                        }}>18.00</Text>
                </View>
            </View>                    
        </View>
    );
}

export default CustTopBar;
