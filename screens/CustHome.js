import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const CustHome = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                        alignSelf: "center",
                    }}
                    source={require("../images/CEATY_Logo.png")}
                />
            <View style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        }}>
                        <Image
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        source={{ uri: 'https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png'}}
                    />
                <View>
                    <Text style={tw`p-1 text-2xl font-bold text-center`}>User Name</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        }}>
                        <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={{ uri: 'https://cdn.imgbin.com/6/8/24/imgbin-gender-symbol-intersex-lgbt-symbols-transgender-symbol-PGHrwsQ4UXBmFuUTABTVWXiTU.jpg'}}
                    />
                        <Text style={tw`text-lg text-center`}> Pronoun</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        }}>
                        <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={{ uri: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_956422.jpg'}}
                    />
                        <Text style={tw`text-lg text-center`}> Location</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        }}>
                        <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        source={{ uri: 'https://www.citypng.com/public/uploads/preview/earth-world-globe-icon-free-png-11640258431wnqvotwkjs.png'}}
                    />
                        <Text style={tw`text-lg text-center`}> Nationality</Text>
                    </View>
                </View>
            </View>
            <View style={tw`mt-5 bg-red-300`}>
                <Text style={tw`text-center text-lg font-bold`}>Your CEATY Highlights</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 20,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>28</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>$63</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 5,
                        }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Restaurants visited</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Rewards earned</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 40,
                        }}>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>$1.4k</Text>
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>4%</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 5,
                        }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Total spending</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>Average Return on Spending</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 60,
                        }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        source={{ uri: 'https://w7.pngwing.com/pngs/913/146/png-transparent-blue-bottle-coffee-logo-iced-coffee-cafe-single-origin-coffee-blue-bottle-coffee-company-blue-bottle-blue-company-text.png'}}
                    />
                    <Text style={{
                        fontSize: 70,
                        color: "green",
                        }}>3rd</Text>
            </View>
            <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",    
                        paddingTop: 5,
                        }}>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>The most visited restaurant</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        }}>The highest rating</Text>
            </View>
        </SafeAreaView>
    )
}

export default CustHome

const styles = StyleSheet.create({})