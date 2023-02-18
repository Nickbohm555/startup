import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, Animated } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH, phoneWidth } from '../components/CarouselCardItem'
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const data = [
    {
      id: 1,
      content: 'Launch customized loyalty campaigns',
      image: require('../images/RestWelcome1.jpeg')
    },
    {
      id: 2,
      content: 'Track customer spendings and your earnings',
      image: require('../images/RestWelcome2.jpeg')
    },
    {
      id: 3,
      content: 'Engage with your customers and offer exclusive benefits',
      image: require('../images/RestWelcome3.jpeg')
    }
  ];
  
  const RestWelcome = () => {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => (
    <View style={styles.slideContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={{
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        padding: 40,
        }}>{item.content}</Text>
    </View>
  );

  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={tw`flex-1 bg-yellow-100`}>
        <View style={{
            flex: .8,
            }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                }}>
                <Image
                    style={{
                        width: 150,
                        height: 150,
                        paddingTop: 10,
                        resizeMode: "contain",
                        alignSelf: "center",
                        marginLeft: 20,
                }}
                source={require("../images/CEATY_Logo.png")}
            />
            <TouchableOpacity 
                onPress={() => navigation.navigate('RestSignIn')}
                style={{
                    borderRadius: 20,
                    backgroundColor: "#EABBAE",
                    padding: 5,
                    alignSelf: 'flex-end',
                    marginRight: 20,
                }}>
                <Text style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontSize: 15,
                    fontWeight: 'bold',
                }}>Sign In</Text>
            </TouchableOpacity>
            </View>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={onSnapToItem}
            />
            <View style={styles.indicatorContainer}>
                {data.map((_, i) => {
                const opacity = activeIndex === i ? 1 : 0.3;

                return (
                    <View
                    key={i}
                    style={[styles.indicator, { opacity }]}
                    />
                );
                })}
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('RestSignUp')}
                style={{
                    backgroundColor: "#FFA24C",
                    marginTop: 100,
                    borderRadius: 20,
                    padding: 10,
                    marginLeft: 30,
                    marginRight: 30,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        padding: 10,
                        fontWeight: 'bold',
                    }}>Get started</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  slideContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  content: {
    fontSize: 16,
    marginTop: 10
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'black'
  }
});

export default RestWelcome;