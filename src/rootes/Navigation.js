import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import DashboardComptesEspece from '../screens/DashboardComptesEspece';
import DashboardComptesTitre from '../screens/DashboardComptesTitre';
import FirstTimeInquiry from '../screens/FirstTimeInquiry';
import ContactCDG from '../screens/ContactCDG';

import ModifierMdpInquiry from '../screens/ModifierMdpInquiry';
import LoadingScreen from '../screens/LoadingScreen';
import Notif from '../screens/Notif';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a network request to show the loading screen for 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DashboardCmptEspc"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Notif" component={Notif} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="FirstTimeInquiry" component={FirstTimeInquiry} />
        <Stack.Screen name="ContactCDG" component={ContactCDG} />
        <Stack.Screen
          name="ModifierMdpInquiry"
          component={ModifierMdpInquiry}
        />
        <Stack.Screen
          name="DashboardCmptEspc"
          component={DashboardComptesEspece}
        />
        <Stack.Screen
          name="DashboardCmptTitre"
          component={DashboardComptesTitre}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
