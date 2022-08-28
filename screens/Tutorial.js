import { View, Text, Button, StyleSheet , ScrollView, Image} from 'react-native'
import React ,{useState, useEffect, useCallback, useRef} from 'react'
import { SocialIcon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios'
import { WebView } from 'react-native-webview';

import { Video } from 'expo-av';

import { Linking } from "react-native";
 
const baseUrl = 'https://fxpesa.pie.co.ke/versions/code.php';
const link = 'https://fxpesa.pie.co.ke/versions/yt.php';

function Tutorial (){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const[Tex,setTex] = React.useState([]);
  const [youtubeId, setYt]=useState([]);

 useEffect(()=>{
    axios({
      method: 'get', 
      url: `${baseUrl}`,
    }).then((response) => {
      console.log(response.data);
      setTex(response.data);
    });

    axios({
      method: 'get',
      url: `${link}`,
    }).then((response) => {
      setYt(response.data);
      console.log("trouble start");
      console.log(youtubeId);
      console.log("trouble end");
    });
 },[]) 

 const shortcourse = ()=>{
    Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with...`);
 }
 
  return (
    <ScrollView>
      <View>

<View>
  {youtubeId.map(yt=>
    <View>
        <WebView  
              allowsFullscreenVideo={true}
              scalesPageToFit={true}
          source={{html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${yt}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
          style={{marginTop: 4,
          height: 200,
          }}
        />
      </View>
  )

  }
</View>      

        <Text style={{
            marginTop: 8,
            fontSize: 15,
            color: 'green',
            fontWeight: 'bold',
            marginLeft: 10,
            textDecorationLine: 'underline'
        }}>CODE BLOCKS</Text>
      <View style={styles.code}>
        {
          Tex.map(content => (
            <Text style={{
              
            }}>{content}</Text>
          ))
        }
      </View> 

        <Text style={{
            fontSize: 15,
            marginLeft: 10,
            color: 'blue',
            fontWeight: 'bold',
            textDecorationLine: 'underline'
        }}>COMMUNITIES</Text> 

        <View style={{
          display: 'flex',
          flexDirection:'row'
        }}>
                <SocialIcon
                  type="whatsapp"
                  onPress={() => {
                    Linking.openURL('https://chat.whatsapp.com/JSdOuNDfvLe8hcZ8MeFpAs');
                  }}
                />
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    Linking.openURL("https://twitter.com/franknyaboga_");
                  }}
                />
        </View>

        <Text style={{
                    fontWeight: 'bold',
                    color: 'red', 
                    marginLeft: 10,
                    fontSize: 15,
                    textDecorationLine: 'underline',
                  }}>SHORT QUERIES</Text>

        <View style={{
          backgroundColor: '#d5deeb',
          margin: 10
        }}>
                  <View>
                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with Mpesa Daraja Intergration, Am willing Ksh. 1000 for your expenses.`);
                    }}>M-Pesa Daraja Api Intergration</Text>
                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with PhpMyadmin Guide, Am willing Ksh. 1000 for your expenses.`);
                    }}>Xampp and PHPMyadmin Usage</Text>
                    <Text style={styles.shortcourse} onPress={()=>{
                        Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with installing Xampp with PhpMyadmin, Am willing Ksh. 100 for your bundles.`);
                    }}>Installing Xampp Server with PhpMyadmin</Text>
                    <Text style={styles.shortcourse} onPress={()=>{
                    
                    Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with Consumong Apis in React Native.`);
                    }}>Consuming Apis in React Native</Text>
                   
                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with Cpanel Tour.`);
                    }}>Making your Website Live on All Devices</Text>
                    
                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with uploading Apps to Google Playstore.`);
                    }}>Uploading App To Google Playstore</Text>  

                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with uploading Apps to Google Playstore.`);
                    }}>Installing Wordpress Plugins</Text>   

                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with uploading Apps to Google Playstore,.`);
                    }}>Adding ads to your website/App</Text> 

                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with Connecting to Application and Database.,.`);
                    }}>Connecting to Application and Database.</Text> 

                    <Text style={styles.shortcourse} onPress={()=>{
                      Linking.openURL(`https://wa.me/+254112643522/?text=hello, i am interested with uploading Apps to Google Playstore.`);
                    }}>Other Queries</Text>                     
                  </View>
        </View>

                </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({ 
    code: {
        fontSize: 20,
        margin: 10,
        marginTop: 4,
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#d5deeb'
    }
    ,
    shortcourse: {
        fontWeight: 'bold',
        marginLeft: 10,
        textDecorationLine: 'underline',      
        marginBottom: 4 
    }
})
export default Tutorial