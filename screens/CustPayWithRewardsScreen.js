import React, { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustBottomBar from '../components/CustBottomBar';
import CustTopBar from '../components/CustTopBar';

const CustPayWithRewardsScreen = () => {
    const navigation = useNavigation();
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
                        <Image
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        source={require('../images/FiveGuysLogo.png')}
                    />
                <View>
                    <Text style={tw`p-1 text-2xl font-bold text-left`}>Name</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={{ uri: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_956422.jpg'}}
                    />
                       {/* {restaurantInfo['MapsLink']} */}
                       <Text style={tw`text-lg text-left`}> Location</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require('../images/CuisineIcon.png')}
                    />
                    {/* {restaurantInfo['Cuisine']} */}
                        <Text style={tw`text-lg text-left`}> Cuisine</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={require('../images/RestaurantManagerIcon.png')}
                    />
                        <Text style={tw`text-lg text-left`}> Restaurant Manager</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text
                        style={{
                            fontSize: 15,
                            paddingLeft: 15,
                            paddingTop: 20,
                            fontWeight: "bold",
                        }}>Amount that you want to pay</Text>
                    <TextInput
                    style={tw`ml-5 mr-5 mt-1 bg-white text-left text-sm py-2 px-4 rounded-md`}
                    placeholder="Enter the amount that you want to pay"
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    />
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                        fontWeight: "bold",
                    }}>Select the tip amount</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                }}>
                <Text>Insert check boxes here</Text>
            </View>
            <View style={{
                borderBottomWidth: 2,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                        paddingBottom: 15,
                        fontWeight: "bold",
                    }}>Your payment summary</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                    }}>Amount to be paid</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                    }}>$20.00</Text> 
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                    }}>Tax (8.875%)</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                    }}>$1.75</Text> 
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 2,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                    }}>Tip</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                        paddingBottom: 15,
                    }}>$4.00</Text> 
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 40,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 15,
                        fontWeight: "bold",
                    }}>Total amount to be paid</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                        fontWeight: "bold",
                    }}>$25.75</Text> 
            </View>

            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustHome')}
                    style={tw`mt-5 mr-5 ml-5 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Pay with CEATY rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={tw`mt-5 mr-5 ml-5 bg-gray-300 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`absolute inset-x-0 bottom-0`}>
            <CustBottomBar />
            </View>
        </SafeAreaView>
    )
}

export default CustPayWithRewardsScreen

const styles = StyleSheet.create({})