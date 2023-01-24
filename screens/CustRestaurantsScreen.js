import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const CustRestaurantsScreen = () => {
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
            <Text style={tw`text-4xl font-bold text-center`}>Restaurants</Text>
            <Image
                style={{
                    width: 75,
                    height: 75,
                    alignSelf: "center",
                }}
                source={require("../images/congrats_icon.png")}
            />
            <Text style={tw`m-10 text-lg text-center`}>You successfully signed up for CEATY. Use the app while you are visiting the restaurant and start earning rewards!</Text>
        </View>
            <View style={tw`h-1/2`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustRestaurantsScreen')}
                    style={tw`mt-5 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustRestaurantDetailsScreen')}
                    style={tw`mt-5 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Restaurant Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustRestaurantsScreen

const styles = StyleSheet.create({})