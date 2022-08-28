import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AdMobBanner } from 'expo-ads-admob';
import Login from '../screens/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Devs from '../screens/Devs';
import Host from '../screens/Host';
import Tutorial from '../screens/Tutorial';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Tabs() {
  const[usercode, setCode]=React.useState();
  AsyncStorage.getItem("code").then(val=>{
    setCode(val);
  })

  if(usercode > 0){
    return (
      <>
      <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name="Highlights" component={Tutorial}  options={{
                       headerStyle:{
                          backgroundColor: '#c6eb34'
                         },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
          }}/>
                  <Tab.Screen name="Hosting Plans" component={Host} options={{
                     headerStyle:{
                      backgroundColor: '#c6eb34'
                     },
            tabBarLabel: 'Hosting',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="server" color={color} size={size} />
            ),
          }}/>
                  <Tab.Screen name="Project Ideas" component={Devs} options={{
                       headerStyle:{
                          backgroundColor: '#c6eb34'
                         },
            tabBarLabel: 'Projects',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="rocket" color={color} size={40} />
            ),
          }}/>
              </Tab.Navigator>
      </NavigationContainer>
  
      <AdMobBanner
    bannerSize="fullBanner"
    adUnitID="ca-app-pub-4266400232196448/8287660656"
    servePersonalizedAds= {true}
    />
      </>
    );
  }else{
    return (
      <>
      <View style={styles.login}>
        <Login />
      </View>
      </>
    )
  }
}

const styles=StyleSheet.create({
  login: {
    flex: 1,
    paddingTop: Dimensions.get('window').height/6,
    backgroundColor: '#e9f2ec'
  }
})