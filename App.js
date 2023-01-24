import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import CustomerScreen from './screens/CustomerScreen';
import SignUpScreen from './screens/SignUpScreen';
import WalletScreen from './screens/WalletScreen';
import ConnectedWalletScreen from './screens/ConnectedWalletScreen';
import CongratsScreen from './screens/CongratsScreen';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import RewardsScreen from './screens/RewardsScreen';
import AccountScreen from './screens/AccountScreen';
import CustRestaurantsScreen from './screens/CustRestaurantsScreen';
import CustRankingsScreen from './screens/CustRankingsScreen';
import CustRestaurantDetailsScreen from './screens/CustRestaurantDetailsScreen';
import CustRequestConfirmationScreen from './screens/CustRequestConfirmationScreen';
import CustPayWithRewardsScreen from './screens/CustPayWithRewardsScreen';
import CustPayWithRewardsMetaMaskScreen from './screens/CustPayWithRewardsMetaMaskScreen';
import CustPaymentConfirmationScreen from './screens/CustPaymentConfirmationScreen';

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
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustomerScreen" 
              component={CustomerScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="SignUpScreen" 
              component={SignUpScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="WalletScreen" 
              component={WalletScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="ConnectedWalletScreen" 
              component={ConnectedWalletScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CongratsScreen" 
              component={CongratsScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="SignInScreen" 
              component={SignInScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="DashboardScreen" 
              component={DashboardScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="RewardsScreen" 
              component={RewardsScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="AccountScreen" 
              component={AccountScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustRestaurantsScreen" 
              component={CustRestaurantsScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustRankingsScreen" 
              component={CustRankingsScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustRestaurantDetailsScreen" 
              component={CustRestaurantDetailsScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustRequestConfirmationScreen" 
              component={CustRequestConfirmationScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustPayWithRewardsScreen"
              component={CustPayWithRewardsScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustPayWithRewardsMetaMaskScreen"
              component={CustPayWithRewardsMetaMaskScreen} 
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen 
              name="CustPaymentConfirmationScreen"
              component={CustPaymentConfirmationScreen} 
              options={{
                headerShown: true,
              }}
            />
            {/* <Stack.Screen 
              name="HomeScreen"
              component={Home} 
              options={{
                headerShown: true,
              }}
            /> */}
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
