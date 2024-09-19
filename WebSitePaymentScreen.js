import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
const WebsitePaymentScreen = ({}) => {
    const checkIsUPIIntentLink = (link) => {
        if (link != undefined &&
            (link.startsWith("upi://pay")
                || link.startsWith("tez://") || link.startsWith("gpay://")
                || link.startsWith("paytmmp://")
                || link.startsWith("phonepe://"))) {
            return true;
        }
        return false;
    };
    return (React.createElement(WebView, { source: { uri: 'https://internal.prodint.cashfree.com/checkout?pt=session_soPoDKVZ1XV3mC-fYzG1GLYcWvkgUEku2AC_9p5A1Gp_0XKZUkiXLXWTEMOvIg3pF0BwgvXsiY0a72b7GIPwhcyEfo_zSEQ_GZ5RtD3f7OxD' }, style: { flex: 1 }, onShouldStartLoadWithRequest: event => {
            console.log("Current URL Loading", event.url);
            if (checkIsUPIIntentLink(event.url)) {
                Linking.canOpenURL(event.url).then(supported => {
                    if (supported) {
                        Linking.openURL(event.url);
                    }
                    else {
                        console.log("Not able to open");
                    }
                });
                return false;
            }
            return true;
        } }));
};
export default WebsitePaymentScreen;
