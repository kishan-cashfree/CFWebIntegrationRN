import React from 'react';
import { View, Button, NativeAppEventEmitter } from 'react-native';
import { StackNavigationProp }  from '@react-navigation/stack';

export type RootStackParamList = {
    HomeScreen: undefined; 
    AndroidJsPaymentScreen: undefined;
    WebsitePaymentScreen: undefined;
    WebsiteDefaultUPIScreen: undefined;
  };

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const onClick = () => {
    navigation.navigate('AndroidJsPaymentScreen'); 
  };

  const websitePaymentScreen = () => {
    navigation.navigate('WebsitePaymentScreen'); 
  };

  const websiteDefaultUPIScreen = () => {
    navigation.navigate('WebsiteDefaultUPIScreen'); 
  };

  let paymentResponseFunction = (response: string) => {
    console.log('response is : ' + JSON.stringify(response));
    navigation.navigate('HomeScreen');
  };
  NativeAppEventEmitter.addListener("paymentResponse", paymentResponseFunction)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Payment Page with Android JS Integration"
        onPress={onClick}
      />
      <View style={{ width: 50, height: 50,}} />
      <Button
        title="Website JS Integration PaymentScreen"
        onPress={websitePaymentScreen}
      />
      <View style={{ width: 50, height: 50,}} />
      <Button
        title="Website JS Integration with Default UPI"
        onPress={websiteDefaultUPIScreen}
      />
    </View>
  );
};

export default HomeScreen;