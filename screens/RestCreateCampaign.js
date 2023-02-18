import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import RestTopBar from '../components/RestTopBar';
import RestBottomBar from '../components/RestBottomBar';
// import { CheckBox } from 'react-native-elements'
import { CheckBox } from '@rneui/themed';

const RestCreateCampaign = () => {
    const navigation = useNavigation();
    const [check1, setCheck1] = useState(false);

    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <RestTopBar />
            </View>
            <View style={{
                paddingTop: 80,
                paddingLeft: 10,
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                }}>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Position</Text>
            </View>
            <View>
                {/* add "onChange" for each input */}
                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 30,
                    }}>Campaign name</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
                placeholder="name"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 50,
                    }}>Total campaign budget</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
                placeholder="budget"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 20,
                    }}>Expected return on investment</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
                placeholder="expected ROI"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />

                <Text
                    style={{
                        fontSize: 20,
                        paddingLeft: 20,
                        paddingTop: 20,
                    }}>Campaign duration</Text>
                <TextInput
                style={tw`ml-5 mr-5 mt-1 bg-white text-left text-lg py-2 px-4 rounded-md`}
                placeholder="duration"
                placeholderTextColor="#36485f"
                underlineColorAndroid={'transparent'}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                    <CheckBox
                        center
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                        checkedColor="#B4BB92"
                    />
                    <Text style={{fontSize: 13, marginRight: 70}}>CEATY charges 2% campaign fee for restaurants. Checking this box means you accept to pay campaign fee.</Text>
                </View>
                <TouchableOpacity 
                        onPress={() => navigation.navigate('RestHome')}
                        style={{
                            backgroundColor: "#B4BB92",
                            borderRadius: 30,
                            padding: 10,
                            margin: 10,
                        }}>
                            <Text style={tw`text-black text-lg font-bold text-center`}>Deposit budget & launch your campaign</Text>
                    </TouchableOpacity>        
                </View>
                <View style={tw`absolute inset-x-0 bottom-0`}>
                    <RestBottomBar />
                </View>
        </SafeAreaView>
    )
}

export default RestCreateCampaign

const styles = StyleSheet.create({})