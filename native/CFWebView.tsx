import {HostComponent, requireNativeComponent} from 'react-native';
import React  from 'react';
import { WebView, WebViewProps } from 'react-native-webview';
import { NativeProps } from 'react-native-webview/lib/RNCWebViewNativeComponent';
const CFRNWebViewManager = requireNativeComponent('CFRNWebViewManager');

type CFWebViewProps = WebViewProps & {
  paymentInfo?: Record<string, any> ;
};

const CFWebViewModule = requireNativeComponent<CFWebViewProps>('CFWebViewModule');

export default class CFWebView extends React.Component<CFWebViewProps> {
  render() {
    const { paymentInfo, ...props } = this.props;

    if(paymentInfo){
    return (
        <CFWebViewModule {...props} paymentInfo={paymentInfo} />
      );
    }
    return (
        <WebView
          {...props}
          nativeConfig={{
            component: CFRNWebViewManager as unknown as HostComponent<NativeProps>,
          }}
        />
      );
  }
}
