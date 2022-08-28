import { Formik } from 'formik'
import React, { useState } from 'react'
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';

import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef()


function Login() {
  const[error, setValid]=useState(false);
  return (
   <ScrollView style={{
    backgroundColor: '#e9f2ec'
   }}>
    <Formik
      initialValues={
        {mail : ''}
      }
      onSubmit={(values)=>{
        axios.post('https://fxpesa.pie.co.ke/versions/maillist.php', {mail: values }).then((response)=>{
          if(response.data === 1){
            setValid(false);
            console.log("false");
            
            if (navigationRef.isReady()) {
              navigationRef.navigate('Highlights');
            }
          }else{
            setValid(true);
            console.log("true");
            
          }
        })

      }} 

    > 
      {(props)=>(
         <View style={styles.container}>
         <View>
           <Text style={styles.suscriber}>WEEKLY NEWSLETTER</Text>
           <Text>Stay updated on Technology Trends and related content for FREE!!</Text>
           <Image
        style={styles.tinyLogo}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
         </View>
 
         <View>
           <TextInput 
              style={styles.input}
              onChangeText={props.handleChange('mail')}
              value={props.values.mail}
              placeholder='Email Address'
              type="email"
           />

           {error && (
                         <Text style={{
                          marginBottom: 3,
                          color: 'red'
                         }}>
                            Type a valid email address.
                         </Text>
           )}
         </View>
 
         <View>
           <TouchableOpacity style={styles.opacity}>
             <Button title='PROCEED' onPress={props.handleSubmit}/>
           </TouchableOpacity>
         </View>
 
     </View>
      )}

      </Formik>

   </ScrollView>
  )
}

export default Login

const styles=StyleSheet.create({
container: {
  marginVertical: 20,
  flex: 1,
  marginHorizontal: 10,

},
suscriber: {
  fontWeight: 'bold',
  fontSize: 20
},
opacity: {
  backgroundColor: '#5e57eb',
  borderRadius: 10
},
input: { 
borderWidth: 1,
marginVertical: 10,
borderRadius: 4,
height: 40,
padding: 5
},
tinyLogo: {
  width: 100,
  height: 100,
  alignSelf: 'center'
} 
})
