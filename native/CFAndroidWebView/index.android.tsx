import {requireNativeComponent, ViewProps} from 'react-native';

interface CFWebViewProps extends ViewProps {
  paymentInfo?: object;
}

const CFWebView = requireNativeComponent<CFWebViewProps>('CFWebViewModule');
export default CFWebView;