import {HostComponent, requireNativeComponent} from 'react-native';
import React  from 'react';
import { WebView, WebViewProps } from 'react-native-webview';
import { NativeProps } from 'react-native-webview/lib/RNCWebViewNativeComponent';
const CFRNWebViewManager = requireNativeComponent('CFRNWebViewManager');

type CFWebViewProps = WebViewProps & {
  paymentInfo?: object;  // Flag to conditionally apply nativeConfig
  onShouldStartLoadWithRequest?: (request: any) => boolean; // Custom handler
};

const CFWebViewModule = requireNativeComponent<CFWebViewProps>('CFWebViewModule');

export default class CFWebView extends React.Component<CFWebViewProps> {

  checkIsUPIIntentLink = (link: string) => {
    return (
      link !== undefined &&
      (link.startsWith('upi://pay') ||
        link.startsWith('tez://') ||
        link.startsWith('gpay://') ||
        link.startsWith('paytmmp://') ||
        link.startsWith('phonepe://'))
    );
  };

  handleDefaultLogic = (request: any) => {
    const { url } = request;
    console.log('Default logic: Intercepted request in CFWebView:', url);
    if (this.checkIsUPIIntentLink(url)) {
      // Handle UPI intent links (e.g., navigate to the UPI app or show a custom UI)
      return false; // Prevent the WebView from loading the UPI intent link
    }

    return true; // Allow navigation for other URLs
  };

  render() {
    const {
      nativeConfig,
      paymentInfo,
      onShouldStartLoadWithRequest, // Custom handler
      ...restProps
    } = this.props;

    return (
      <WebView
        {...restProps}
        onShouldStartLoadWithRequest={(request) => {
          const defaultResult = this.handleDefaultLogic(request);
          if (!defaultResult) {
            return false;
          }
          // Execute custom logic if provided
          if (onShouldStartLoadWithRequest) {
            return onShouldStartLoadWithRequest(request);
          }
          return true;
        }}
        nativeConfig= {
          paymentInfo
            ? {
                component: CFRNWebViewManager as unknown as HostComponent<any>,
                ...nativeConfig,
              }
            : undefined
        }
      />
    );
  }
}