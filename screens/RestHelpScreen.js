import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import RestTopBar from '../components/RestTopBar';
import RestBottomBar from '../components/RestBottomBar';

const RestHelpScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <RestTopBar />
            </View>
            <View>
                {/* add "onChange" for each input */}
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 70,
                    }}>Email</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
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
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
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
                style={tw`h-1/3 ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
                placeholder="Please type in your question"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity 
                        onPress={() => navigation.navigate('RestHome')}
                        style={tw`mt-10 m-5 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                            <Text style={tw`text-black text-lg font-bold text-center`}>Submit Your Question</Text>
                    </TouchableOpacity>        
                </View>
                <Text style={tw`m-5`}>Thanks for reaching out to CEATY! Don't worry, CEATY team has your back! We will assign you an agent as soon as possible to help you. Our agent will reach out to you via email. Please don't forget to check your junk/spam box.</Text>
                <View style={tw`absolute inset-x-0 bottom-0`}>
                    <RestBottomBar />
                </View>
        </SafeAreaView>
    )
}

export default RestHelpScreen

const styles = StyleSheet.create({})