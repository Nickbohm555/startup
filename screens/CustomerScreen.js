import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH, phoneWidth } from '../components/CarouselCardItem'
import data from '../components/data'

const CustomerScreen = () => {
    const navigation = useNavigation();
    const isCarousel = React.useRef(null)
//   return (
//     <View>
//       <Carousel
//         layout="tinder"
//         layoutCardOffset={9}
//         ref={isCarousel}
//         data={data}
//         renderItem={CarouselCardItem}
//         sliderWidth={415}
//         itemWidth={415}
//         useScrollView={true}
//       />
//     </View>
//   )
    return (
        // <View style>
        //     <Carousel
        //         layout="tinder"
        //         layoutCardOffset={9}
        //         ref={isCarousel}
        //         data={data}
        //         renderItem={CarouselCardItem}
        //         sliderWidth={phoneWidth}
        //         itemWidth={phoneWidth}
        //         useScrollView={true}
        //     />
        // </View>
        <View>
            <View style={tw`h-1/2`}>
                <Image
                    style={tw`flex-1`}
                    source={require("../images/CustWelcome1.jpeg")}
                />
            </View>
            <View style={tw`h-1/2`}>
                <Text style={tw`p-10 text-2xl font-bold text-center`}>Visit the restaurants that you are excited about</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={tw`mt-10 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                        <Text style={tw`text-black text-lg font-bold text-center`}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomerScreen

const styles = StyleSheet.create({})