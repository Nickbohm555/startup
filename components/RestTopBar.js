import tw from 'tailwind-react-native-classnames';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ImageBackground } from 'react-native';
import CustRestaurantsRow from '../components/CustRestaurantsRow';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SelectList } from 'react-native-dropdown-select-list';
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useEffect, useState } from 'react';

// Firebase
import { firebase } from '../database/config';
import { query, where } from "firebase/firestore";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();

const RestTopBar = () => {
    const navigation = useNavigation();

    // Firebase
    const [restInfo, setRestInfo] = useState([{"address": "", "cuisine": "", "email": "", "name": "", "phoneNumber": "", "walletAddress": ""}]);

    useEffect(() => {

        const getRestInfo = async () => {
            const restInfo = await getDocs(collection(db, "/restaurants"), where('email', '==', 'fiveGuys@example.com'));
            setRestInfo(restInfo.docs.map(doc => doc.data()));
        }
        getRestInfo();
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
                <Icon name="logout" size={40} color="black" style={{paddingRight: 90}}/>
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
            <View style={tw`mt-8 ml-10 mr-2 mb-5`}>
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
                        }}>{restInfo[0]['walletAddress']}</Text>
                </View>
            </View>                    
        </View>
    );
}

export default RestTopBar;
