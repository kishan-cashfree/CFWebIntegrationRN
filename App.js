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
const Stack = createStackNavigator();
function App() {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Stack.Navigator, { initialRouteName: "HomeScreen" },
            React.createElement(Stack.Screen, { name: "HomeScreen", component: HomeScreen }),
            React.createElement(Stack.Screen, { name: "PaymentScreen", component: PaymentScreen }),
            React.createElement(Stack.Screen, { name: "WebsitePaymentScreen", component: WebsitePaymentScreen }))));
}
export default App;
