import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// this JS file is for one *row. Essentially create as a component for 'Loggedin.js'
// take in text for restaurant, return display of one row

const CustRestRankingRow = (props) => {

  return (
    <View style={styles.item}>
      <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                }}>
        <Image
            style={{
                width: 25,
                height: 25,
            }}
            source={{ uri: 'https://w7.pngwing.com/pngs/428/294/png-transparent-burger-king-hd-logo.png'}}
        />
        <Text style={{
                    fontSize: 15,
                    color: "black",
                    }}>{props['object']['Name']}</Text>
        <Text style={{
                    fontSize: 15,
                    color: "black",
                    paddingLeft: 30,
                    }}>{props['object']['Ranking']}</Text>
        <Text style={{
                    fontSize: 15,
                    color: "black",
                    paddingLeft: 60,
                    }}>{props['object']['Spent']}</Text>
        <Text style={{
                    fontSize: 15,
                    color: "black",
                    paddingLeft: 40,
                    }}>{props['object']['Rewards']}</Text>
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

export default CustRestRankingRow;