import React from 'react';
import { View, Button, NativeAppEventEmitter } from 'react-native';
const HomeScreen = ({ navigation }) => {
    const onClick = () => {
        navigation.navigate('PaymentScreen');
    };
    const websitePaymentScreen = () => {
        navigation.navigate('WebsitePaymentScreen');
    };
    let paymentResponseFunction = (response) => {
        console.log('response is : ' + JSON.stringify(response));
        navigation.navigate('HomeScreen');
    };
    NativeAppEventEmitter.addListener("paymentResponse", paymentResponseFunction);
    return (React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
        React.createElement(Button, { title: "Payment Page with Android JS bridge", onPress: onClick }),
        React.createElement(View, { style: { width: 50, height: 50, } }),
        React.createElement(Button, { title: "Website JS Integration PaymentScreen", onPress: websitePaymentScreen })));
};
export default HomeScreen;
