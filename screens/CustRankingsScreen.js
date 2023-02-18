import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import CustRestRankingRow from '../components/CustRestRankingRow';
import React, {useState} from 'react';
import { KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';

const CustRankingsScreen = () => {
    const navigation = useNavigation();
    let taskItems = [{'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}, {'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}, {'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}, {'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}, {'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}, {'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}, {'Name': 'Burger King', 'Ranking': '3rd', 'Spent': '$312', 'Rewards': '$10.21'}];
    
    const completeTask = (index) => {
        let company_info = taskItems[index];
    
        navigation.navigate('CustRestaurantDetailsScreen', {company: company_info});
    }


    const [selected, setSelected] = React.useState("");
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
                    }}>Your top ranking in your location</Text>
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
                    }}>Ranking</Text>
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    }}>Spent</Text>
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    }}>Rewards</Text>
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
                     
                    <TouchableOpacity key={index} onPress={ () => completeTask(index) } >
                    <CustRestRankingRow object={item} /> 
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

export default CustRankingsScreen