import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// this JS file is for one *row. Essentially create as a component for 'Loggedin.js'
// take in text for restaurant, return display of one row

const CustRewardsRow = (props) => {
  return (
    <View style={styles.item}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        }}>
        <Text style={{
            fontSize: 15,
            color: "black",
            }}>{props['object']['Date']}</Text>
        <Text style={{
            fontSize: 15,
            color: "black",
            paddingLeft: 30,
            }}>{props['object']['TxType']}</Text>
        <Text style={{
            fontSize: 15,
            color: "black",
            paddingLeft: 60,
            }}>{props['object']['Restaurant']}</Text>
        <Text style={{
            fontSize: 15,
            color: "black",
            paddingLeft: 40,
            }}>{props['object']['Amount']}</Text>
        <Text style={{
            fontSize: 15,
            color: "blue",
            paddingLeft: 40,
            textDecorationLine: 'underline',
            }}>{props['object']['XScanLink']}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default CustRewardsRow;