import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Keyboard, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

// database
import {firebase} from '../database/config.js';
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { Component } from 'react';
const db = getFirestore();

// Supabase client
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://umfmcmfxgpjabpofuvmq.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZm1jbWZ4Z3BqYWJwb2Z1dm1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4MjUzNTYsImV4cCI6MTk5MjQwMTM1Nn0.0ntTegonsaWB8Pct2ODsJ3sQOpczdBP8BFlS4j_Zi3Q"

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     storage: AsyncStorage as any,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// })


async function addCustomer(name, pronouns, age, nationality, location) {
    try {
        const docRef = await addDoc(collection(db, "/customers"), {
            custName: name,
            custPronouns: pronouns,
            custAge: age,
            custNationality: nationality,
            custLocation: location,
        });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
        console.error("Error adding document: ", e);
        }
}

export default class Signup extends Component{

    state = {
        custName: '',
        custPronouns: '',
        custAge: '',
        custNationality: '',
        custLocation: '',
      };

      //const navigation = useNavigation()
      handleCustName = text => {
        this.setState({custName: text});
      };
      handleCustPronouns = text => {
        this.setState({custPronouns: text});
      };
      handleCustAge = text => {
        this.setState({custAge: text});
      };
      handleNationality = text => {
        this.setState({custNationality: text});
      };
      handleCustLocation = text => {
        this.setState({custLocation: text});
      };


      SignUpPressed = () => {
        const {custName, custPronouns, custAge, custNationality, custLocation} = this.state;
        if (
          custName == '' &&
          custPronouns == '' &&
          custAge == '' &&
          custNationality == '' &&
          custLocation == ''   
        )
        {
            
          this.props.navigation.navigate('CongratsScreen')
          //Alert.alert("Please Fill in the all Blanks");
        } 
       
    else {
          Keyboard.dismiss();
    
          //addCustomer(custName, custPronouns, custAge, custNationality, custLocation);
          this.props.navigation.navigate('CongratsScreen')
          // navigates back to sign in page
            
        }
      };

    

    render() {
        
    return (
        
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
        <View>
            <Image
                style={{
                    width: 110,
                    height: 110,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 0,
                }}
                source={require("../images/CEATY_Logo.png")}
            />
        <View>
            {/* add "onChange" for each input */}
            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                }}>User Name</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl p-5 rounded-md`}
            placeholder="user name"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            onChangeText={this.handleCustName}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingTop: 5,
                }}>Pronouns</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl p-5 rounded-md`}
            placeholder="pronouns"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingTop: 5,
                }}>Age</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl p-5 rounded-md`}
            placeholder="age"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingTop: 5,
                }}>Nationality</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl p-5 rounded-md`}
            placeholder="nationality"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingTop: 5,
                }}>Location</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-left text-xl p-5 rounded-md`}
            placeholder="city, state, country"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />
        </View>
            <SafeAreaView>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('WalletScreen')}
                    style={{
                        backgroundColor: "#C9CEB1",
                        marginTop: 20,
                        marginLeft: 15,
                        marginRight: 15,
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
                        <Text style={tw`text-black text-lg font-bold text-center`}>Connect your metamask wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.SignUpPressed()}
                    style={{
                        backgroundColor: "#FFA24C",
                        marginTop: 20,
                        marginLeft: 15,
                        marginRight: 15,
                        borderRadius: 20,
                        padding: 15,
                    }}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Sign up</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
        </SafeAreaView>
    );
}
}



const styles = StyleSheet.create({});