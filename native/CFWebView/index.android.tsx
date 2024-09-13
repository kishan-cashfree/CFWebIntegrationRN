import {requireNativeComponent, ViewProps} from 'react-native';

interface CFWebViewProps extends ViewProps {
  paymentSessionId?: string;
}

const CFWebView = requireNativeComponent<CFWebViewProps>('CFWebViewModule');
export default CFWebView;