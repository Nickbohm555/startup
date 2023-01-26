import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustRestaurantsScreen from './CustRestaurantsScreen';
import RewardsScreen from './RewardsScreen';
import CustRankingsScreen from './CustRankingsScreen';
import AccountScreen from './AccountScreen';
import BottomTab from '../navbar/BottomTab';
import SideTab from '../navbar/SideTab';

const DashboardScreen = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    return (
        <SideTab/>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({})