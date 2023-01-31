import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const CustHelpScreen = () => {
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
                    }}>Email</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="Please enter your email address"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 10,
                    }}>Subject</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="Please enter the subject of your question"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 10,
                    }}>Question</Text>
                <TextInput
                style={tw`h-1/3 ml-5 mr-5 mt-1 bg-white text-left text-lg border-2 border-yellow-500 py-2 px-4 rounded-md`}
                placeholder="Please type in your question"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity 
                        onPress={() => navigation.navigate('CongratsScreen')}
                        style={tw`mt-10 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                            <Text style={tw`text-white text-lg font-bold text-center`}>Submit Your Question</Text>
                    </TouchableOpacity>        
                </View>
                <Text>Thanks for reaching out to CEATY! Don't worry, CEATY team has your back! We will assign you an agent as soon as possible to help you. Our agent will reach out to you via email. Please don't forget to check your junk/spam box.</Text>
            </View>
        </View>
    )
}

export default CustHelpScreen

const styles = StyleSheet.create({})