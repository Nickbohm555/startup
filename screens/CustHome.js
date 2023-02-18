import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

const CustHome = () => {
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
                        <Icon name="account" size={150} color="black" />
                <View>
                    <Text style={tw`p-1 text-2xl font-bold text-center`}>User Name</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        }}>
                        <Icon name="gender-male-female" size={25} color="black" />

                        <Text style={tw`text-lg text-center`}> Pronoun</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        }}>
                        <Icon2 name="location-on" size={25} color="black" />
                        <Text style={tw`text-lg text-center`}> Location</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        }}>
                        <Icon3 name="globe" size={20} color="black" />
                        <Text style={tw`text-lg text-center`}> Nationality</Text>
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
                        }}>28</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>$63</Text>
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
                        }}>$1.4k</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>4%</Text>
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