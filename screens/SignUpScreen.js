import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

// database
import {firebase} from '../database/config.js';
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { Component } from 'react';
const db = getFirestore();


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
        ) {
            
          Alert.alert("Please Fill in the all Blanks");
        } 
       
    else {
          Keyboard.dismiss();
    
          // Send Info to Authentication System
        //   firebase.auth().createUserWithEmailAndPassword(email, pass)
        //   .then(userCredentials => {
        //     const user = userCredentials.user;
        //     console.log(user.email);
        //   })
        //   .catch(error => alert(error.message))
    
          // call function to add customer to database
          addCustomer(custName, custPronouns, custAge, custNationality, custLocation);
          this.props.navigation.navigate('CongratsScreen')
          // navigates back to sign in page
          
           //this.props.navigation.navigate('Signin');  
        }
      };

    

    render() {
        
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
                }}>Name</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-center text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
            placeholder="user name"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            onChangeText={this.handleCustName}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                }}>Pronouns</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-center text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
            placeholder="pronouns"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                }}>Age</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-center text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
            placeholder="age"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                }}>Nationality</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-center text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
            placeholder="nationality"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />

            <Text
                style={{
                    fontSize: 20,
                    paddingLeft: 20,
                }}>Location</Text>
            <TextInput
            style={tw`ml-5 mr-5 mt-1 bg-white text-center text-2xl border-2 border-yellow-500 py-2 px-4 rounded-md`}
            placeholder="city, state, country"
            placeholderTextColor="#36485f"
            underlineColorAndroid={'transparent'}
            />
        </View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('WalletScreen')}
                    style={tw`mt-10 bg-white border-2 border-yellow-500 font-bold py-2 px-4 rounded-full`}>
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
                    style={tw`mt-10 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}
}



const styles = StyleSheet.create({});