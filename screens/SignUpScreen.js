import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={tw`h-1/2 p-1`}>
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
            <View style={tw`h-1/2`}>
                <Text style={tw`p-10 text-2xl font-bold text-center`}>Add form here...</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('WalletScreen')}
                    style={tw`mt-10 border-2 border-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: "contain",
                                alignSelf: "center",
                            }}
                            source={require("../images/metamask_icon.png")}
                        />
                        <Text style={tw`text-black text-lg font-bold text-center`}>Connect your metamask wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CongratsScreen')}
                    style={tw`mt-10 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})