import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// this JS file is for one *row. Essentially create as a component for 'Loggedin.js'
// take in text for restaurant, return display of one row

const RestCampaignsRow = (props) => {
  return (
    <View style={styles.item}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        }}>
        <Text style={{
            fontSize: 12,
            paddingLeft: 10,
            color: "black",
            }}>{props['object']['Campaign']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 60,
            }}>{props['object']['Date']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 50,
            }}>{props['object']['Budget']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 65,
            }}>{props['object']['ROI']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 70,
            }}>{props['object']['% Fulfilled']}</Text>
        <Text style={{
            fontSize: 12,
            color: "black",
            paddingLeft: 70,
            }}>{props['object']['Revenue']}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#CACFB1',
    padding: 25,
    borderRadius: 0,
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

export default RestCampaignsRow;