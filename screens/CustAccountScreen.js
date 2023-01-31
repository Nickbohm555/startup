import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
    const navigation = useNavigation();
        return (
            <View style={tw`flex-1 bg-yellow-100`}>
            <View>
                <View style={tw`p-1`}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                        resizeMode: "contain",
                        alignSelf: "center",
                    }}
                    source={require("../images/CEATY_Logo.png")}
                />
            </View>
                <View>
                {/* add "onChange" for each input */}
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                    }}>Name</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="name"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                    }}>Pronouns</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="pronouns"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                    }}>Age</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="age"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                    }}>Nationality</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="nationality"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
    
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                    }}>Location</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="city, state, country"
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

                        }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={tw`mt-10 bg-white border-2 border-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        
                        <Text style={tw`text-black text-lg font-bold text-center`}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={tw`mt-10 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Update & Save</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        
    )
}

export default AccountScreen

const styles = StyleSheet.create({})