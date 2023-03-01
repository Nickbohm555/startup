import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ImageBackground } from 'react-native';
import CustRestaurantsRow from '../components/CustRestaurantsRow';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';
import React, { useEffect, useState } from 'react';

// Firebase
import { firebase } from '../database/config';
import { query, where } from "firebase/firestore";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();

const CustRestaurantsScreen = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState("");

    // Firebase
    const [restInfo, setRestInfo] = useState([{"address": "", "cuisine": "", "email": "", "name": "", "phoneNumber": "", "walletAddress": "", "city": ""}]);
    const [rest, setRest] = useState([{"address": "", "cuisine": "", "email": "", "name": "", "phoneNumber": "", "walletAddress": "", "city": ""}]);

    useEffect(() => {

        const getRestInfo = async () => {
            const restInfo = await getDocs(collection(db, "/restaurants"), where('name', '==', "Five Guys"));
            setRestInfo(restInfo.docs.map(doc => doc.data()));
        }
        getRestInfo();
    }, []);

    const data = [
        {key:'1', value:'New York'},
        {key:'2', value:'Boston'},
        {key:'3', value:'Chicago'},
        {key:'4', value:'Dallas'},
        {key:'5', value:'Los Angeles'},
        {key:'6', value:'Miami'},
        {key:'7', value:'San Francisco'},
        {key:'8', value:'Seattle'},
        {key:'9', value:'Washington DC'},
    ]

    const completeTask = (index) => {
        let company_info = restInfo[index];
    
        navigation.navigate('CustRestaurantDetailsScreen', {company: company_info});
    }


    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>    
            <View style={tw`absolute inset-x-0 top-0`}>
                <CustTopBar />
            </View>                            
            <Text style={{
                fontSize: 20,
                color: "black",
                paddingLeft: 20,
                paddingTop: 70,
                }}>Select Location</Text>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                boxStyles={{
                    backgroundColor: 'white',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    paddingTop: 15,
                    paddingBottom: 15,
                    }}
            />
            <View style={tw`mt-5 bg-gray-300`}>
                <Text style={{
                fontSize: 15,
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                padding: 8,
                }}>Restaurants in the city where you are located</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",    
                paddingTop: 10,
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                }}>
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    }}>Name</Text>
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    }}>Reward</Text>
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    }}>Cuisine</Text>
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    }}>City</Text>
            </View>
            <ScrollView
            contentContainerStyle={{
            flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
            >
            <View style={styles.tasksWrapper}> 
            <View style={styles.items}>
            
            {
                restInfo.map((item, index) => {
                
                    return (
                    // {onPress={() => completeTask(index)}}
                    <TouchableOpacity key={index} onPress={ () => completeTask(index) }>
                    <CustRestaurantsRow object={item} /> 
                    </TouchableOpacity>
                )
                })
            }

            </View>
            </View>
            </ScrollView>  
            <View style={tw`absolute inset-x-0 bottom-0`}>
            <CustBottomBar />
            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default CustRestaurantsScreen