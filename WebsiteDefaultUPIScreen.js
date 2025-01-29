import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
const WebsiteDefaultUpiPaymentScreen = ({}) => {
    const checkIsUPIIntentLink = (link) => {
        // eslint-disable-next-line eqeqeq
        if (link != undefined &&
            (link.startsWith('upi://pay')
                || link.startsWith('tez://') || link.startsWith('gpay://')
                || link.startsWith('paytmmp://')
                || link.startsWith('phonepe://'))) {
            return true;
        }
        return false;
    };
    return (React.createElement(WebView, { source: { uri: 'https://internal.prodint.cashfree.com/checkout?pt=session_gtWonxb3Ar1da2aDwulXbrQu6PVufNjZ6GASzzFWdut_f466GAe9M8ELVHuuqMrvyC8pCtoMzCvF2N8JsmaqYzGmoZBV3wsPBtBQr6ONLFgXcY39mVBAzecpayment' }, style: { flex: 1 }, onShouldStartLoadWithRequest: event => {
            console.log('Current URL Loading', event.url);
            if (checkIsUPIIntentLink(event.url)) {
                Linking.canOpenURL(event.url).then(supported => {
                    if (supported) {
                        console.log('able to open');
                        Linking.openURL(event.url);
                    }
                    else {
                        console.log('Not able to open');
                    }
                });
                return false;
            }
            return true;
        } }));
};
export default WebsiteDefaultUpiPaymentScreen;
