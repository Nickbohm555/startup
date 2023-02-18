import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// this JS file is for one *row. Essentially create as a component for 'Loggedin.js'
// take in text for restaurant, return display of one row

const RestLeaderboardRow = (props) => {
  return (
    <View style={styles.item}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        }}>
        <Text style={{
            fontSize: 12,
            color: "black",
            }}>{props['object']['Position']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 60,
            }}>{props['object']['Customer']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 40,
            }}>{props['object']['Visits']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 65,
            }}>{props['object']['Spendings']}</Text>
        <Text style={{
            fontSize: 12,
            color: "blue",
            paddingLeft: 70,
            textDecorationLine: 'underline',
            }}>{props['object']['Earnings']}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F7AA93',
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

export default RestLeaderboardRow;