import React from 'react';
import CFWebView from './native/CFWebView';
const WebsitePaymentScreen = ({}) => {
    return (React.createElement(CFWebView, { source: { uri: 'https://discoverpilgrim.com/' } }));
};
export default WebsitePaymentScreen;
