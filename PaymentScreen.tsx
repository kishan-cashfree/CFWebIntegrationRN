import React from 'react';
import CFWebView from './native/CFWebView'

const PaymentScreen: React.FC = ({ }) => {
    return (
        <CFWebView
        paymentSessionId={"session_kY-tXlysx58bnK3kXrEagyeua0nZKynH9MlqgmqmVcRZVWT-GYKk3IgYF9wws47bDW7dScvudwkaG_BsbbfXFmrJn2Cpi4wAbAuaMIAbMmrU"} 
        style={{ flex: 1 }} />
      );
};
  
export default PaymentScreen;