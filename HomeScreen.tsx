import React from 'react';
import { View, Button, NativeAppEventEmitter } from 'react-native';
import { StackNavigationProp }  from '@react-navigation/stack';

export type RootStackParamList = {
    HomeScreen: undefined; 
    PaymentScreen: undefined;
  };

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const onClick = () => {
    navigation.navigate('PaymentScreen'); 
  };

  let paymentResponseFunction = (response: string) => {
    console.log('response is : ' + JSON.stringify(response));
    navigation.navigate('HomeScreen');
  };
  NativeAppEventEmitter.addListener("paymentResponse", paymentResponseFunction)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Open Payment Page"
        onPress={onClick}
      />
    </View>
  );
};

export default HomeScreen;