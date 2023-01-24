import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import NavOptions from '../components/NavOptions';

const SignInScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-10`}>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: "contain",
                        alignSelf: "center",
                    }}
                    source={require("../images/CEATY_Logo.png")}
                />
                <Text style={tw`mt-2 text-2xl font-semibold text-center`}>The first borderless Web3 restaurant loyalty app</Text>
                <TouchableOpacity 
                        onPress={() => navigation.navigate('DashboardScreen')}
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
                            <Text style={tw`text-black text-lg font-bold text-center`}>Sign in with MetaMask</Text>
                    </TouchableOpacity>
            </View>
            <View style={tw`flex-row bg-white justify-evenly bottom-0`}>
                <TouchableOpacity>
                    <Text>About</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Terms of Service</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Contact</Text>
                </TouchableOpacity>
            </View>
        
        </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})
