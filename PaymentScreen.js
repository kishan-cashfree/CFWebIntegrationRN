import React from 'react';
import CFWebView from './native/CFAndroidWebView';
const PaymentScreen = ({}) => {
    return (React.createElement(CFWebView, { paymentInfo: {
            paymentSessionId: "session_soPoDKVZ1XV3mC-fYzG1GLYcWvkgUEku2AC_9p5A1Gp_0XKZUkiXLXWTEMOvIg3pF0BwgvXsiY0a72b7GIPwhcyEfo_zSEQ_GZ5RtD3f7OxD",
            env: 'production'
        }, style: { flex: 1 } }));
};
export default PaymentScreen;
