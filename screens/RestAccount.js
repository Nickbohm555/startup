import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import RestTopBar from '../components/RestTopBar';
import RestBottomBar from '../components/RestBottomBar';

const RestAccount = () => {
    const navigation = useNavigation();
        return (
            <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
                <View style={tw`absolute inset-x-0 top-0`}>
                    <RestTopBar />
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
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 0,
                    }}>Name</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-1 px-4 rounded-md`}
                placeholder="name"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Address</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-1 px-4 rounded-md`}
                placeholder="address"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Cuisine</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-1 px-4 rounded-md`}
                placeholder="cuisine"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Phone Number</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-1 px-4 rounded-md`}
                placeholder="phone number"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Email</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-1 px-4 rounded-md`}
                placeholder="email"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Google Maps Link</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
                placeholder="location"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Social Media Handles</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-sm py-2 px-4 rounded-md`}
                placeholder="at least 3 social media accounts"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 20,
                        marginTop: 5,
                    }}>Responsible Contact</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-1 px-4 rounded-md`}
                placeholder="name, phone number, email address"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: 5,

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
                        paddingTop: 5,
                        }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('RestAccount')}
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
                    onPress={() => navigation.navigate('RestHome')}
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
                <RestBottomBar />
            </View>
            </SafeAreaView>
        
    )
}

export default RestAccount

const styles = StyleSheet.create({})