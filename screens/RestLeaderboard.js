import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ImageBackground } from 'react-native';
import CustRestaurantsRow from '../components/CustRestaurantsRow';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import RestTopBar from '../components/RestTopBar';
import RestBottomBar from '../components/RestBottomBar';
import RestLeaderboardRow from '../components/RestLeaderboardRow';


const RestLeaderboard = () => {
    const navigation = useNavigation();
    let taskItems = [{'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}, {'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}, {'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}, {'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}, {'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}, {'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}, {'Position': '1', 'Customer': '0x000...bbb', 'Visits': '38', 'Spendings': '$1539', 'Earnings': '$84'}];
    


    const completeTask = (index) => {
        let company_info = taskItems[index];
    
        navigation.navigate('RestLeaderboard', {company: company_info});
    }


    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>    
            <View style={tw`absolute inset-x-0 top-0`}>
                <RestTopBar />
            </View>                            
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",    
                paddingTop: 80,
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                }}>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Position</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Customer</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Visits</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Spendings</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Earnings</Text>
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
                taskItems.map((item, index) => {
                
                    return (
                    // {onPress={() => completeTask(index)}}
                    <TouchableOpacity key={index} onPress={ () => completeTask(index) }>
                    <RestLeaderboardRow object={item} /> 
                    </TouchableOpacity>
                )
                })
            }

            </View>
            </View>
            </ScrollView>  
            <View style={tw`absolute inset-x-0 bottom-0`}>
                <RestBottomBar />
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
    paddingHorizontal: 10,
    paddingVertical: 20,
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
    paddingVertical: 13,
    paddingHorizontal: 13,
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

export default RestLeaderboard