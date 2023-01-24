import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
    {
        id: "123",
        title: "For Customers",
        screen: "CustomerScreen",
    },
    {
        id: "456",
        title: "For Restaurants",
        screen: "RestaurantScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CustomerScreen')}
                    style={tw`mt-10 bg-yellow-500 font-bold py-2 px-4 rounded-full`}>
                    <View>
                        <Text style={tw`text-white text-lg font-bold text-center`}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions