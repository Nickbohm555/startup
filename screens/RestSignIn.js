import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import NavOptions from '../components/NavOptions';

const RestSignIn = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`flex-1`}>
            <ImageBackground source={ require("../images/backgroundPic.jpeg") } style={tw`flex-1`}>
            <View style={{
                marginTop: 150,
                padding: 20,
                }}>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: "contain",
                        alignSelf: "center",
                    }}
                    source={require("../images/CEATY_Logo.png")}
                />
                <Text style={tw`mt-2 mb-20 text-2xl font-semibold text-center`}>The first borderless Web3 restaurant loyalty app</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('RestHome')}
                    style={{
                        backgroundColor: "#C9CEB1",
                        marginTop: 50,
                        marginLeft: 30,
                        marginRight: 30,
                        borderRadius: 20,
                        padding: 15,
                    }}>
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
                <SafeAreaView style={tw`absolute inset-x-0 bottom-0 flex-row justify-around`}>
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
            </SafeAreaView>
            </ImageBackground>
        
        </View>
  )
}

export default RestSignIn

const styles = StyleSheet.create({})
