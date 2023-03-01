import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import RestTopBar from '../components/RestTopBar';
import RestBottomBar from '../components/RestBottomBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';

// Firebase
import { firebase } from '../database/config';
import { query, where } from "firebase/firestore";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();

const RestHome = () => {
    const navigation = useNavigation();

    // Firebase
    const [restInfo, setRestInfo] = useState([{"address": "", "cuisine": "", "email": "", "name": "", "phoneNumber": "", "walletAddress": ""}]);
    const [campaign, setCampaign] = useState([])

    useEffect(() => {

        const getCampaignInfo = async () => {
            const campaign = await getDocs(collection(db, "/campaigns"), where('walletAddress', '==', '1234567890@example.com'));
            setCampaign(campaign.docs.map(doc => doc.data()));
        }

        const getRestInfo = async () => {
            const restInfo = await getDocs(collection(db, "/restaurants"), where('email', '==', 'fiveGuys@example.com'));
            setRestInfo(restInfo.docs.map(doc => doc.data()));
        }
        getRestInfo();
        getCampaignInfo();

    }, []);

    var length = campaign.length
    var budget = 0
    var roi = 0
    for (var i = 0; i < length; i++) {
        budget += campaign[i]['budget']
        roi += campaign[i]['roi']
    }
    roi = roi / length
    
    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <RestTopBar />
            </View>
            <View style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        marginTop: 70,
                        marginBottom: 20,
                        }}>
                        <Image source={require('../images/FiveGuysLogo.png')} style={{width: 130, height: 130}} />
                        {/* <Icon name="account" size={150} color="black" /> */}
                <View style={tw`ml-5`}>
                    <Text style={tw`p-1 text-2xl font-bold text-left`}>{restInfo[0]['name']}</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon2 name="location-on" size={25} color="black" />
                        <Text style={tw`text-lg text-left`}>{restInfo[0]['address']}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon name="silverware-fork-knife" size={20} color="black" />
                        <Text style={tw`text-lg text-left`}>{restInfo[0]['cuisine']}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon name="account" size={20} color="black" />
                        <Text style={tw`text-lg text-left`}>Restaurant Manager</Text>
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
                        paddingTop: 30,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>{length}</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>1328</Text>
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
                        }}>Launched campaigns</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Customers participated</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 50,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>${budget}</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>{roi}x</Text>
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
                        }}>Allocated budget</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Average ROI</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 50,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>$328</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>1.8</Text>
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
                        }}>Max customer spending</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Average visit/customer</Text>
            </View>
            <View style={tw`absolute inset-x-0 bottom-0`}>
            <RestBottomBar />
            </View>
        </SafeAreaView>
    )
}

export default RestHome

const styles = StyleSheet.create({})