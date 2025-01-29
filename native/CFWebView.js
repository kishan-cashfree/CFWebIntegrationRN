import { requireNativeComponent } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
const CFRNWebViewManager = requireNativeComponent('CFRNWebViewManager');
const CFWebViewModule = requireNativeComponent('CFWebViewModule');
export default class CFWebView extends React.Component {
    render() {
        const { paymentInfo, ...props } = this.props;
        if (paymentInfo) {
            return (React.createElement(CFWebViewModule, { ...props, paymentInfo: paymentInfo }));
        }
        return (React.createElement(WebView, { ...props, nativeConfig: {
                component: CFRNWebViewManager,
            } }));
    }
}
