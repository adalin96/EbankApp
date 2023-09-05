import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import DashboardComptesEspece from '../screens/DashboardComptesEspece';
import DashboardComptesTitre from '../screens/DashboardComptesTitre';
import LoginV2 from '../screens/LoginV2'
import FirstTimeInquiry from '../screens/FirstTimeInquiry'
import test from '../screens/test'
import ContactCDG from '../screens/ContactCDG';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ContactCDG"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="test" component={test} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginV2" component={LoginV2} />
        <Stack.Screen name="FirstTimeInquiry" component={FirstTimeInquiry} />
        <Stack.Screen name="ContactCDG" component={ContactCDG} />
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
