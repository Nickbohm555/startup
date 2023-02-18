import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, ImageBackground, Modal } from 'react-native';
import CustRestaurantsRow from '../components/CustRestaurantsRow';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import RestTopBar from '../components/RestTopBar';
import RestBottomBar from '../components/RestBottomBar';
import RestCampaignsRow from '../components/RestCampaignsRow';

const RestCampaigns = () => {
    const navigation = useNavigation();
    let taskItems = [{'Campaign': 'NYE', 'Date': 'Jan1-Apr1', 'Budget': '$10,000', 'ROI': '$10x', '% Fulfilled': '99%', 'Revenue': '$4977'}, {'Campaign': 'NYE', 'Date': 'Jan1-Apr1', 'Budget': '$10,000', 'ROI': '$10x', '% Fulfilled': '99%', 'Revenue': '$4977'}, {'Campaign': 'NYE', 'Date': 'Jan1-Apr1', 'Budget': '$10,000', 'ROI': '$10x', '% Fulfilled': '99%', 'Revenue': '$4977'}, {'Campaign': 'NYE', 'Date': 'Jan1-Apr1', 'Budget': '$10,000', 'ROI': '$10x', '% Fulfilled': '99%', 'Revenue': '$4977'}, {'Campaign': 'NYE', 'Date': 'Jan1-Apr1', 'Budget': '$10,000', 'ROI': '$10x', '% Fulfilled': '99%', 'Revenue': '$4977'}];
    const [modalVisible, setModalVisible] = useState(false);


    const completeTask = (index) => {
        let company_info = taskItems[index];
        setModalVisible(true)
        navigation.navigate('RestCampaigns', {company: company_info});
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
                    fontSize: 11,
                    color: "black",
                    fontWeight: "bold",
                    }}>Campaign</Text>
                <Text style={{
                    fontSize: 11,
                    color: "black",
                    fontWeight: "bold",
                    }}>Date</Text>
                <Text style={{
                    fontSize: 11,
                    color: "black",
                    fontWeight: "bold",
                    }}>Budget</Text>
                <Text style={{
                    fontSize: 11,
                    color: "black",
                    fontWeight: "bold",
                    }}>ROI</Text>
                <Text style={{
                    fontSize: 11,
                    color: "black",
                    fontWeight: "bold",
                    }}>% Fulfilled</Text>
                <Text style={{
                    fontSize: 11,
                    color: "black",
                    fontWeight: "bold",
                    }}>Revenue</Text>
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
                    <RestCampaignsRow object={item} /> 
                    </TouchableOpacity>
                )
                })
            }
            </View>
            </View>
            </ScrollView>  
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('RestCreateCampaign')}
                    style={{
                        backgroundColor: "#B39123",
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 30,
                        borderRadius: 20,
                        padding: 15,
                        marginBottom: 150,
                    }}>
                        <Text style={tw`text-white text-lg font-bold text-center`}>Create a new campaign</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(false);
                    }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#E6E6E6', padding: 10, paddingTop: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 50}}>
                        <Text style={{fontSize: 20}}>Unspent amount in campaign budget</Text>
                        <TextInput
                            style={tw`mt-1 bg-white text-center text-lg py-1 px-4 rounded-md`}
                            placeholder="$542"
                            placeholderTextColor="#36485f"
                            underlineColorAndroid={'transparent'}
                            editable={false}
                            />
                        <Text style={{fontSize: 18, paddingTop: 10}}>You can transfer remaining budget to your registered MetaMask wallet</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            paddingTop: 5,
                            }}>
                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)}
                                style={{
                                    backgroundColor: "white",
                                    borderWidth: 1,
                                    borderColor: "#FFA24C",
                                    marginTop: 15,
                                    marginLeft: 15,
                                    marginRight: 15,
                                    borderRadius: 20,
                                    padding: 15,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                }}>
                                <Text style={tw`text-black text-lg font-bold text-center`}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)}
                                style={{
                                    backgroundColor: "#FFA24C",
                                    marginTop: 15,
                                    marginLeft: 15,
                                    marginRight: 15,
                                    borderRadius: 20,
                                    padding: 15,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                }}>
                                <Text style={tw`text-black text-lg font-bold text-center`}>Transfer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </Modal>
            </View>

            <View style={tw`absolute inset-x-0 bottom-0`}>
                <RestBottomBar />
            </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 0,
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
    paddingVertical: 11,
    paddingHorizontal: 11,
    backgroundColor: '#FFF',
    borderRadius: 0,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default RestCampaigns