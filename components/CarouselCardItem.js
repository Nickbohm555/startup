import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, SafeAreaView } from "react-native"
import tw from 'tailwind-react-native-classnames';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const phoneWidth = Dimensions.get('window').width
export const phoneHeight = Dimensions.get('window').height / 4

const CarouselCardItem = ({ item, index }) => {
    // const varLocation =  item.imageLocation
    // console.log(varLocation)
    return (
    <SafeAreaView style={tw`h-full`}>
        <ImageBackground 
        style={{ flex: .5, justifyContent: 'center'}}
        source={{ uri: item.imageLocation }} />

        <Text style={tw`bg-white mt-10 text-xl font-semibold text-center`}>
            {item.text}
        </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    flex: 1,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem