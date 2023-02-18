import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const CustPayWithRewardsMetaMaskScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
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
            <Text style={tw`text-3xl font-bold text-center`}>Pay with Rewards MetaMask</Text>
            <Image
                style={{
                    width: 75,
                    height: 75,
                    alignSelf: "center",
                }}
                source={require("../images/metamask_icon.png")}
            />
            <Text style={tw`m-10 text-lg text-center`}>You successfully signed up for CEATY. Use the app while you are visiting the restaurant and start earning rewards!</Text>
        </View>
            <View style={tw`h-1/2`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustPaymentConfirmationScreen')}
                    style={tw`mt-20 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustPayWithRewardsMetaMaskScreen')}
                    style={tw`mt-10 border-2 border-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Reject</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CustPayWithRewardsMetaMaskScreen

const styles = StyleSheet.create({})