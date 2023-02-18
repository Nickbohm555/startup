import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';

const CustRequestConfirmationScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <CustTopBar />
            </View>
        
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 150,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                    }}>Your check amount</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                    }}>$50.00</Text> 
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 2,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 20,
                    }}>Restaurant reward rate</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                        paddingBottom: 15,
                    }}>10%</Text> 
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 40,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 15,
                        paddingTop: 15,
                        fontWeight: "bold",
                    }}>Estimated rewards to be earned</Text>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingRight: 15,
                        fontWeight: "bold",
                    }}>$5.00</Text> 
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 15,                        
                        paddingTop: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}>Please show below confirmation code to the restaurant responsible when solicited. You will receive the rewards after restaurant checks and confirms your request.</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                }}>
                <Text
                    style={{
                        fontSize: 80,                        
                        paddingTop: 100,
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontWeight: "bold",
                    }}>123-456</Text>
            </View>

            <View style={tw`absolute inset-x-0 bottom-0`}>
                <CustBottomBar />
            </View>
        </SafeAreaView>
    )
}

export default CustRequestConfirmationScreen

const styles = StyleSheet.create({})