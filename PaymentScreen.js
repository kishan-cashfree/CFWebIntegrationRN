import React from 'react';
import CFWebView from './native/CFWebView';
const PaymentScreen = ({}) => {
    return (React.createElement(CFWebView, { paymentInfo: {
            paymentSessionId: 'session_gtWonxb3Ar1da2aDwulXbrQu6PVufNjZ6GASzzFWdut_f466GAe9M8ELVHuuqMrvyC8pCtoMzCvF2N8JsmaqYzGmoZBV3wsPBtBQr6ONLFgXcY39mVBAzecpayment',
            env: 'production',
        }, style: { flex: 1 } }));
};
export default PaymentScreen;
