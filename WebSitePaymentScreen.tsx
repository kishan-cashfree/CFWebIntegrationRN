import React from 'react';
import CFWebView from './native/CFWebView';

const WebsitePaymentScreen: React.FC = ({ }) => {
  
  return (
    <CFWebView 
    source={{uri: 'https://discoverpilgrim.com/'}}
    />
    );
};
  
export default WebsitePaymentScreen;