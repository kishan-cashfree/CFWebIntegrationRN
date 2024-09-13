import React from 'react';
import { View, Button, NativeAppEventEmitter } from 'react-native';
const HomeScreen = ({ navigation }) => {
    const onClick = () => {
        navigation.navigate('PaymentScreen');
    };
    let paymentResponseFunction = (response) => {
        console.log('response is : ' + JSON.stringify(response));
        navigation.navigate('HomeScreen');
    };
    NativeAppEventEmitter.addListener("paymentResponse", paymentResponseFunction);
    return (React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
        React.createElement(Button, { title: "Open Payment Page", onPress: onClick })));
};
export default HomeScreen;
