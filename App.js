import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import SideTab from './navbar/SideTab';

// Screens
import HomeScreen from './screens/HomeScreen';

// Customer Screens
import CustomerScreen from './screens/CustomerScreen';
import SignUpScreen from './screens/SignUpScreen';
import WalletScreen from './screens/WalletScreen';
import ConnectedWalletScreen from './screens/ConnectedWalletScreen';
import CongratsScreen from './screens/CongratsScreen';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import RewardsScreen from './screens/RewardsScreen';
import CustAccountScreen from './screens/CustAccountScreen';
import CustRestaurantsScreen from './screens/CustRestaurantsScreen';
import CustRankingsScreen from './screens/CustRankingsScreen';
import CustRestaurantDetailsScreen from './screens/CustRestaurantDetailsScreen';
import CustRequestConfirmationScreen from './screens/CustRequestConfirmationScreen';
import CustPayWithRewardsScreen from './screens/CustPayWithRewardsScreen';
import CustPayWithRewardsMetaMaskScreen from './screens/CustPayWithRewardsMetaMaskScreen';
import CustPaymentConfirmationScreen from './screens/CustPaymentConfirmationScreen';
import CustHome from './screens/CustHome';
import CustHelpScreen from './screens/CustHelpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustTopBar from './components/CustTopBar';

// Restaurant Screens
import RestWelcome from './screens/RestWelcome';
import RestSignUp from './screens/RestSignUp';
import RestCongrats from './screens/RestCongrats';
import RestSignIn from './screens/RestSignIn';
import RestHome from './screens/RestHome';
import RestHelpScreen from './screens/RestHelpScreen';
import RestAccount from './screens/RestAccount';
import RestLeaderboard from './screens/RestLeaderboard';
import RestCampaigns from './screens/RestCampaigns';
import RestCreateCampaign from './screens/RestCreateCampaign';

const Stack = createNativeStackNavigator();

// function Home() {
     
//   return (
     
//     <Tab.Navigator
//             tabBarOptions={{
//                 showLabel: false,
//                 style: {
//                     position: 'absolute',
//                     bottom: 25,
//                     left: 20,
//                     right: 20,
//                     elevation: 0,
//                     backgroundColor: '#ffffff',
//                     borderRadius: 15,
//                     height: 90,
//                     ...styles.shadow
//                 }
//             }}
//         >
//             <Tab.Screen name="Home" component={DashboardScreen} />
//             <Tab.Screen name="Restaurants" component={CustRestaurantsScreen} />
//             <Tab.Screen name="Rewards" component={RewardsScreen} />
//             <Tab.Screen name="Rankings" component={CustRankingsScreen} />
//             <Tab.Screen name="Account" component={AccountScreen} />
//         </Tab.Navigator>
//     );

//     const styles = StyleSheet.create({
//       shadow: {
//           shadowColor: '#7F5DF0',
//           shadowOffset: {
//               width: 0,
//               height: 10,
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 3.5,
//           elevation: 5
//       }
//   });

// };


export default function App() {
  
  const Drawer = createDrawerNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustomerScreen" 
              component={CustomerScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="SignUpScreen" 
              component={SignUpScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />

            <Stack.Screen
              name="CustTopBar"
              component={CustTopBar}
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="WalletScreen" 
              component={WalletScreen} 
              options={{
                headerShown: true,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="ConnectedWalletScreen" 
              component={ConnectedWalletScreen} 
              options={{
                headerShown: true,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CongratsScreen" 
              component={CongratsScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="SideTab" 
              component={SideTab} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="SignInScreen" 
              component={SignInScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="DashboardScreen" 
              component={DashboardScreen} 
              options={{
                headerShown: true,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="RewardsScreen" 
              component={RewardsScreen} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustAccountScreen" 
              component={CustAccountScreen} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustRestaurantsScreen" 
              component={CustRestaurantsScreen} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustRankingsScreen" 
              component={CustRankingsScreen} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustRestaurantDetailsScreen" 
              component={CustRestaurantDetailsScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustRequestConfirmationScreen" 
              component={CustRequestConfirmationScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustPayWithRewardsScreen"
              component={CustPayWithRewardsScreen} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustPayWithRewardsMetaMaskScreen"
              component={CustPayWithRewardsMetaMaskScreen} 
              options={{
                headerShown: true,
                // gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="CustPaymentConfirmationScreen"
              component={CustPaymentConfirmationScreen} 
              options={{
                headerShown: true,
                // gestureEnabled: false,
              }}
            />
        
            <Stack.Screen 
              name="CustHome"
              component={CustHome}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="CustHelpScreen"
              component={CustHelpScreen} 
              options={{
                headerShown: true,
                // gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestWelcome"
              component={RestWelcome} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestSignUp"
              component={RestSignUp} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
                        
            <Stack.Screen 
              name="RestCongrats"
              component={RestCongrats} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestSignIn"
              component={RestSignIn} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestHome"
              component={RestHome} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestHelpScreen"
              component={RestHelpScreen} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestAccount"
              component={RestAccount} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestLeaderboard"
              component={RestLeaderboard} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestCampaigns"
              component={RestCampaigns} 
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            <Stack.Screen 
              name="RestCreateCampaign"
              component={RestCreateCampaign} 
              options={{
                headerShown: false,
                // gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
