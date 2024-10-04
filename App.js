/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PaymentScreen from './PaymentScreen';
import WebsitePaymentScreen from './WebSitePaymentScreen';
import WebsiteDefaultUpiPaymentScreen from './WebsiteDefaultUPIScreen';
const Stack = createStackNavigator();
function App() {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Stack.Navigator, { initialRouteName: "HomeScreen" },
            React.createElement(Stack.Screen, { name: "HomeScreen", component: HomeScreen }),
            React.createElement(Stack.Screen, { name: "AndroidJsPaymentScreen", component: PaymentScreen }),
            React.createElement(Stack.Screen, { name: "WebsitePaymentScreen", component: WebsitePaymentScreen }),
            React.createElement(Stack.Screen, { name: "WebsiteDefaultUPIScreen", component: WebsiteDefaultUpiPaymentScreen }))));
}
export default App;
