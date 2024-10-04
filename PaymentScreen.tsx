import React from 'react';
import CFWebView from './native/CFAndroidWebView'

const PaymentScreen: React.FC = ({ }) => {
    return (
        <CFWebView
        paymentInfo={
          {
            paymentSessionId : "session_kY-tXlysx58bnK3kXrEagyeua0nZKynH9MlqgmqmVcRZVWT-GYKk3IgYF9wws47bDW7dScvudwkaG_BsbbfXFmrJn2Cpi4wAbAuaMIAbMmrU",
            env: 'sandbox'
          }
        } 
        style={{ flex: 1 }} />
      );
};
  
export default PaymentScreen;