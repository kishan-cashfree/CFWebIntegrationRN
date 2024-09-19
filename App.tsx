/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen, { RootStackParamList } from './HomeScreen';
import PaymentScreen from './PaymentScreen';
import WebsitePaymentScreen from './WebSitePaymentScreen';


const Stack = createStackNavigator<RootStackParamList>();
function App(): React.JSX.Element { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="WebsitePaymentScreen" component={WebsitePaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
