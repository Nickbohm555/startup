import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';
import React, { useEffect, useState } from 'react';

// Firebase
import { firebase } from '../database/config';
import { query, updateDoc, where } from "firebase/firestore";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();

const AccountScreen = () => {
    const navigation = useNavigation();

    // Firebase
    const [custInfo, setCustInfo] = useState([{"customerAge": "", "location": "", "name": "", "nationality": "", "pronouns": "", "walletAddress": ""}]);

    useEffect(() => {

        const getCustInfo = async () => {
            const custInfo = await getDocs(collection(db, "/customers"), where('name', '==', 'Nick Bohm'));
            setCustInfo(custInfo.docs.map(doc => doc.data()));
        }
        getCustInfo();
    }, []);

    // const changeCustInfo = async () => {
    //     const custInfo = await updateDoc(collection(db, "/customers"), where('name', '==', 'Nick Bohm'), {
    //         name: "Nick Bohmmm",     

    //     }).then(() => {
    //         console.log("Document successfully updated!");
    //     }).catch((error) => {
    //         // The document probably doesn't exist.
    //         console.error("Error updating document: ", error);
    //     })
    // }
    // changeCustInfo();
    const changeCustInfo = async () => {
        try {
            const custDoc = await getDocs(collection(db, "customers", "JNPQVj4IuVcqf7QIs4aS"));
          await updateDoc(custDoc, {
            name: 'Nick Bohmmm',
            // other properties to update
          });
          console.log('Document successfully updated!');
        } catch (error) {
          console.error('Error updating document: ', error);
        }
      };
    changeCustInfo();
      

        return (
            <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
                <View style={tw`absolute inset-x-0 top-0`}>
                    <CustTopBar />
                </View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={{
                        borderRadius: 20,
                        backgroundColor: "#EABBAE",
                        padding: 5,
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        marginTop: 80,
                    }}>
                    <Text style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>Logout</Text>
                </TouchableOpacity>
                {/* add "onChange" for each input */}
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        marginTop: 0,
                    }}>Name</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl py-2 px-4 rounded-md`}
                placeholder={custInfo[0]["name"]}
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        marginTop: 20,
                    }}>Pronouns</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl py-2 px-4 rounded-md`}
                placeholder={custInfo[0]["pronouns"]}
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        marginTop: 20,
                    }}>Age</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl py-2 px-4 rounded-md`}
                placeholder={custInfo[0]["customerAge"]}
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        marginTop: 20,
                    }}>Nationality</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl py-2 px-4 rounded-md`}
                placeholder={custInfo[0]["nationality"]}
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        marginTop: 20,
                    }}>Location</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl py-2 px-4 rounded-md`}
                placeholder={custInfo[0]["location"]}
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: 20,

                }}>
                    <View style={{
                        flexDirection: "column",
                        justifyContent: "space-evenly",

                        }}>
                            <Text>Primary wallet addresses:</Text>
                            <Text>0x000...1111</Text>
                    </View>
                    <Text>Change wallet address</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        paddingTop: 20,
                        }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustAccountScreen')}
                    style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "#FFA24C",
                        marginTop: 15,
                        marginLeft: 15,
                        marginRight: 15,
                        borderRadius: 20,
                        padding: 15,
                        paddingLeft: 30,
                        paddingRight: 30,
                    }}>
                    <Text style={tw`text-black text-lg font-bold text-center`}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustHome')}
                    style={{
                        backgroundColor: "#FFA24C",
                        marginTop: 15,
                        marginLeft: 15,
                        marginRight: 15,
                        borderRadius: 20,
                        padding: 15,
                        paddingLeft: 30,
                        paddingRight: 30,
                    }}>
                    <Text style={tw`text-black text-lg font-bold text-center`}>Update & Save</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`absolute inset-x-0 bottom-0`}>
                <CustBottomBar />
            </View>
            </SafeAreaView>
        
    )
}

export default AccountScreen

const styles = StyleSheet.create({})