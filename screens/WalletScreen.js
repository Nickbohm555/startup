import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const WalletScreen = () => {
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
            <Text style={tw`text-3xl font-bold text-center`}>Connect with MetaMask</Text>
            <Text style={tw`text-lg text-center`}>Select the account(s) to use on this site</Text>
        </View>
            <View style={tw`h-1/2`}>
                <Text style={tw`p-10 text-2xl font-bold text-center`}>Add stuff here...</Text>
                <Text style={tw`text-lg text-center`}>Only connect with sites you trust. Learn more</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('WalletScreen')}
                    style={tw`mt-5 border-2 border-yellow-500 font-bold py-2 px-4 rounded-full`}>
                    <Text style={tw`text-black text-lg font-bold text-center`}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ConnectedWalletScreen')}
                    style={tw`mt-5 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default WalletScreen

const styles = StyleSheet.create({})