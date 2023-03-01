import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';

// Firebase
import { firebase } from '../database/config';
import { query, where } from "firebase/firestore";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();

const CustHome = () => {
    const navigation = useNavigation();

    // Firebase
    const [custInfo, setCustInfo] = useState([{"customerAge": "", "location": "", "name": "", "nationality": "", "pronouns": "", "walletAddress": ""}]);
    const [transactionInfo, setTransactionInfo] = useState([{"customerAge": "", "location": "", "name": "", "nationality": "", "pronouns": "", "walletAddress": "", "returnOnSpending": ""}]);
    const [restInfo, setRestInfo] = useState([{"address": "", "cuisine": "", "email": "", "name": "", "phoneNumber": "", "walletAddress": ""}]);

    useEffect(() => {

        const getCustInfo = async () => {
            const custInfo = await getDocs(collection(db, "/customers"), where('name', '==', 'Nick Bohm'));
            setCustInfo(custInfo.docs.map(doc => doc.data()));
        }
        const getTransactionInfo = async () => {
            const transactionInfo = await getDocs(collection(db, "/transactions"), where('customerAddress', '==', '3234567890'));
            setTransactionInfo(transactionInfo.docs.map(doc => doc.data()));
        }
        const getRestInfo = async () => {
            const restInfo = await getDocs(collection(db, "/restaurants"), where('walletAddress', '==', mostVisited(restVisited)));
            setRestInfo(restInfo.docs.map(doc => doc.data()));
        }
        getCustInfo();
        getTransactionInfo();
        getRestInfo();
    }, []);
    console.log(transactionInfo)
    
    var totalRewards = 0
    for (var i = 0; i < transactionInfo.length; i++) {
        totalRewards += transactionInfo[i]['rewardsEarned']
    }
    var totalSpent = 0
    var restVisited = []
    const totalVisited = new Set()
    for (var i = 0; i < transactionInfo.length; i++) {
        totalSpent += transactionInfo[i]['totalSpent']
        restVisited.push(transactionInfo[i]['restAddress'])
        totalVisited.add(transactionInfo[i]['restAddress'])
    }
    function mostVisited(array)
    {
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }
    var topVisitedRest = mostVisited(restVisited)

    // average return on spending
    var totalReturn = 0
    for (var i = 0; i < transactionInfo.length; i++) {
        totalReturn += transactionInfo[i]['returnOnSpending']
    }
    var avgReturn = totalReturn / transactionInfo.length

    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <CustTopBar />
            </View>
            <View style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        marginTop: 70,
                        }}>
                        <Icon name="account" size={150} color="black" />
                <View>
                    <Text style={tw`p-1 text-2xl font-bold text-left`}>{custInfo[0]['name']}</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon name="gender-male-female" size={25} color="black" />

                        <Text style={tw`text-lg text-left`}>{custInfo[0]['pronouns']}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon2 name="location-on" size={25} color="black" />
                        <Text style={tw`text-lg text-left`}>{custInfo[0]['location']}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon3 name="globe" size={20} color="black" />
                        <Text style={tw`text-lg text-left`}>{custInfo[0]['nationality']}</Text>
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: "#FF754C",
                }}>
                <Text style={tw`text-center text-lg`}>Your CEATY Highlights</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 20,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>{totalVisited.size}</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>${totalRewards}</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 5,
                        }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Restaurants visited</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Rewards earned</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 40,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>${totalSpent}</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>{avgReturn}%</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 5,
                        }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Total spending</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Average Return on Spending</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 60,
                        }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        source={{ uri: 'https://w7.pngwing.com/pngs/913/146/png-transparent-blue-bottle-coffee-logo-iced-coffee-cafe-single-origin-coffee-blue-bottle-coffee-company-blue-bottle-blue-company-text.png'}}
                    />
                    <Text style={{
                        fontSize: 20,
                        color: "green",
                        }}>{restInfo[0]['name']}</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>3rd</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 5,
                        }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>The most visited restaurant</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>The highest rating</Text>
            </View>
            <View style={tw`absolute inset-x-0 bottom-0`}>
                <CustBottomBar />
            </View>
        </SafeAreaView>
    )
}

export default CustHome

const styles = StyleSheet.create({})