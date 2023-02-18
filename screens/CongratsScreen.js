import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CongratsScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView 
            style={{
                backgroundColor: "#EBD9AD",
            }}>
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
            <Icon name="thumbs-up" size={150} color="black" style={{alignSelf: "center"}} />
            <Text style={{
                fontSize: 50,
                paddingTop: 10,
                color: "black",
                textAlign: "center",
                }}>Congratulations!</Text>
            <Text style={{
                fontSize: 25,
                padding: 40,
                color: "black",
                textAlign: "center",
                }}>You successfully signed up for CEATY. Use the app while you are visiting the restaurant and start earning rewards!</Text>
        </View>
            <View style={tw`h-1/2`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={{
                        backgroundColor: "#FFA24C",
                        marginTop: 250,
                        marginLeft: 15,
                        marginRight: 15,
                        borderRadius: 20,
                        padding: 15,
                    }}>
                    <Text style={tw`text-black text-lg font-bold text-center`}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CongratsScreen

const styles = StyleSheet.create({})