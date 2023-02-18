import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import CustRewardsRow from '../components/CustRewardsRow';
import CustTopBar from '../components/CustTopBar';
import CustBottomBar from '../components/CustBottomBar';

const RewardsScreen = () => {
    const navigation = useNavigation();
    let taskItems = [{'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}, {'Date': '01/15/23', 'TxType': 'Spent', 'Restaurant': 'Five Guys', 'Amount': '$25.75', 'XScanLink': 'Link'}];

    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
            <View style={tw`absolute inset-x-0 top-0`}>
                <CustTopBar />
            </View>
            <View style={tw`mt-20 bg-gray-300 ml-5 mr-5 rounded-md`}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: "#B4BA92",
                    borderRadius: 10,
                    padding: 5
                    }}>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingLeft: 10,
                    }}>Rewards Earned</Text>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "right",
                    paddingRight: 10,
                    }}>$58.80</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: "#FFB19A",
                    borderRadius: 10,
                    padding: 5
                    }}>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingLeft: 10,
                    }}>Rewards Spent</Text>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "right",
                    paddingRight: 10,
                    }}>$30.00</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: "#FFB19A",
                    borderRadius: 10,
                    padding: 5
                    }}>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingLeft: 10,
                    }}>Rewards Withdrawm</Text>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "right",
                    paddingRight: 10,
                    }}>$58.80</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: "#959C63",
                    borderRadius: 10,
                    padding: 5
                    }}>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "left",
                    paddingLeft: 10,
                    }}>Rewards Available</Text>
                    <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "right",
                    paddingRight: 10,
                    }}>$18.00</Text>
                </View>
                <Text
                    style={{
                    fontSize: 18,
                    paddingTop: 10,
                    paddingLeft: 20,
                    fontWeight: "bold",
                    }}>Rewards withdrawal</Text>
                    <TextInput
                    style={tw`ml-5 mr-5 mt-1 mb-5 bg-white text-left text-sm p-4 rounded-md`}
                    placeholder="Enter the amount you want to withdraw"
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    />
                <TouchableOpacity 
                        onPress={() => navigation.navigate('RewardsScreen')}
                        style={{
                            backgroundColor: "#BA951F",
                            padding: 10,
                            borderRadius: 50,
                            marginLeft: 20,
                            marginRight: 20,
                            marginBottom: 10,
                        }}>
                            <Text style={tw`text-white text-xl font-bold text-center`}>Withdraw rewards</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`mt-5`}>
                <Text style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
                textAlign: "left",
                paddingLeft: 20,
                }}>Transaction History</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",    
                paddingTop: 5,
                borderTopColor: 'black',
                borderTopWidth: 2,
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                }}>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Date</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Tx Type</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Restaurant</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>Amount</Text>
                <Text style={{
                    fontSize: 13,
                    color: "black",
                    fontWeight: "bold",
                    }}>XScan Link</Text>
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
                    <TouchableOpacity key={index} >
                    <CustRewardsRow object={item} /> 
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
    )
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

export default RewardsScreen