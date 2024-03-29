import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';

const AccountScreen = () => {
    const navigation = useNavigation();
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
                placeholder="name"
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
                placeholder="pronouns"
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
                placeholder="age"
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
                placeholder="nationality"
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
                placeholder="location"
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