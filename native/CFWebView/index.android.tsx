import {HostComponent, requireNativeComponent} from 'react-native';
import React  from 'react';
import WebView from 'react-native-webview';
import { NativeProps } from 'react-native-webview/lib/RNCWebViewNativeComponent';
const CFCustomWebView = requireNativeComponent('CFRNWebViewManager');
export default class CFWebView extends React.Component {
  render() {
    return (
      <WebView 
      {...this.props}
      nativeConfig ={{
        component: CFCustomWebView as unknown as HostComponent<NativeProps>,
      }}
      />
    );
  }
}