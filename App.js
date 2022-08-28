import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Download from './screens/download';

import Tabs from './components/Tab';
import axios from 'axios'
import { useState } from 'react';

const current_version = 4;

export default function App() {
  const[version,setVersion] = useState(4);
  const baseUrl = 'https://fxpesa.pie.co.ke/versions/';
  axios({
    method: 'get',
    url: `${baseUrl}`,
  }).then((response) => {
    console.log(response.data);
    setVersion(response.data);
  }); 

  if(version === current_version){
    return (
      <Tabs />
    );
  }else if(version > current_version){
    return (
      <Download />
    )
  }else{
    return (
      <Tabs />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
