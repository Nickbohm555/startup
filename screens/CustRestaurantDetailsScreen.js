import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustBottomBar from '../components/CustBottomBar';
import CustTopBar from '../components/CustTopBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const CustRestaurantDetailsScreen = ({route}) => {
    const navigation = useNavigation();
    const restaurantInfo  = route.params['company'];
    return (
            
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <CustTopBar />
            </View>     
            <View style={{
                flexDirection: "row",
                marginLeft: 30,
                paddingTop: 70,
                }}>
                <Image
                style={{
                    width: 130,
                    height: 130,
                }}
                source={require('../images/FiveGuysLogo.png')}
                    />
                <View>
                    <Text style={tw`p-1 text-2xl font-bold text-left`}>{restaurantInfo['Name']}</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon2 name="location-on" size={25} color="black" />
                       {/* {restaurantInfo['MapsLink']} */}
                       <Text style={tw`text-lg text-left`}>Location</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon name="silverware-fork-knife" size={25} color="black" />
                    {/* {restaurantInfo['Cuisine']} */}
                        <Text style={tw`text-lg text-left`}>Cuisine</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        }}>
                        <Icon name="account" size={25} color="black" />
                        <Text style={tw`text-lg text-left`}>Restaurant Manager</Text>
                    </View>
                </View>
            </View>
            <View style={tw`mt-5 `}>
                <Text style={tw`text-center text-lg font-bold`}>Please rate the service you are provided with</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        paddingTop: 20,
                        }}>
                    <View style={{
                        alignContent: "left",
                        justifyContent: "left",
                        paddingLeft: 40,
                        }}>
                        <Text>0x000...333</Text>
                        <Text>0x000...444</Text>
                        <Text>0x000...555</Text>
                        <Text>0x000...666</Text>
                        <Text>0x000...666</Text>
                    </View>
                    <View style={{
                        alignContent: "left",
                        justifyContent: "left",
                        paddingLeft: 40,
                        }}>
                        <Text style={{
                            fontSize: 15,
                            color: "black",
                            fontWeight: "bold",
                            }}>Overall Rating</Text>
                        
                        <Text style={{
                            fontSize: 70,
                            color: "black",
                            fontWeight: "bold",
                            }}>4.2</Text>
                    </View>
            </View>
            <View>
                <Text
                        style={{
                            fontSize: 15,
                            paddingLeft: 15,
                            paddingTop: 5,
                            fontWeight: "bold",
                        }}>Submit the amount you paid and request rewards</Text>
                    <TextInput
                    style={tw`ml-5 mr-5 mt-1 bg-white text-left text-sm border-2 border-yellow-500 py-2 px-4 rounded-md`}
                    placeholder="Please enter check amount $"
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    />
            </View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustRequestConfirmationScreen')}
                    style={tw`mt-5 mr-5 ml-5 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Request Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustPayWithRewardsScreen')}
                    style={tw`mt-5 mr-5 ml-5 border-2 bg-white border-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Pay with CEATY rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={tw`mt-5 mr-5 ml-5 bg-gray-300 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={tw`absolute inset-x-0 bottom-0`}>
            <CustBottomBar />
            </View>
            
        </SafeAreaView>

    )
}

export default CustRestaurantDetailsScreen

const styles = StyleSheet.create({})