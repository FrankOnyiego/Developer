import React from 'react'
import { Text, View, ScrollView, Button, StyleSheet,Image } from 'react-native'
import { Linking } from "react-native";

function Host() {
  return (
    <ScrollView>
        <View style={styles.package}>
            <View>
                    <Text style={{
                        fontSize: 30, 
                       textAlign: 'center',
                       fontWeight: 'bold'
                    }}>STARTER</Text>
      <Image
        style={{
            width: '100%', 
        }}
        source={require('../images/hostnali.png')}
      />
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold' ,
                    
                    }}>Ideal for Small Business and Blogs</Text>
            </View>
            <View>
                <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center'
                }}
                >KSH. 1350/Year</Text>
                <Button title="ORDER" color="#32a852" onPress={()=>{
                    Linking.openURL('https://hostnali.co.ke/clients/aff.php?aff=92').catch(err=>{
                        console.log(err);
                    })
                
                }} />
            </View>
            <View>
                <Text style={styles.features}>One Domain Hosting</Text>
                <Text style={styles.features}>10GB NVMe Disk Space</Text>
                <Text style={styles.features}>100GB Monthly Bandwidth</Text>
                <Text style={styles.features}>2GB RAM</Text>
                <Text style={styles.features}>Unlimited Emails</Text>
                <Text style={styles.features}>Unlimited Subdomains</Text>
                <Text style={styles.features}>Free SSL Certificate</Text>
                <Text style={styles.features}>Free CPanel</Text>
                <Text style={styles.features}>New PHP 7.2,7.3,7.4</Text>
                <Text style={styles.features}>Node.js fully supported</Text>
                <Text style={styles.features}>Python/Django Fully Supported</Text>
            </View>
            
        </View>

        <View style={styles.package}>
            <View>
                    <Text style={{
                        fontSize: 30, 
                       textAlign: 'center',
                       fontWeight: 'bold'
                    }}>STANDARD</Text>
      <Image
        style={{
            width: '100%', 
        }}
        source={require('../images/hostnali.png')}
      />
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold' ,
                    
                    }}>High Performance plan for Busy Websites.</Text>
            </View>
            <View>
                <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center'
                }}
                >KSH. 3600/Year</Text>
                <Button title="ORDER" color="#32a852" onPress={()=>{
                    Linking.openURL('https://hostnali.co.ke/clients/aff.php?aff=92').catch(err=>{
                        console.log(err);
                    })
                
                }} />
            </View>
            <View>
                <Text style={styles.features}>Five Domain Hosting + Free Domain</Text>
                <Text style={styles.features}>30GB NVMe Disk Space</Text>
                <Text style={styles.features}>300GB Monthly Bandwidth</Text>
                <Text style={styles.features}>3GB RAM, Lightspeed web server</Text>
                <Text style={styles.features}>Unlimited Emails and Databases</Text>
                <Text style={styles.features}>Unlimited Subdomains</Text>
                <Text style={styles.features}>Free SSL Certificate</Text>
                <Text style={styles.features}>Free CPanel</Text>
                <Text style={styles.features}>New PHP 7.2,7.3,7.4</Text>
                <Text style={styles.features}>Node.js fully supported</Text>
                <Text style={styles.features}>Python/Django Fully Supported</Text>
            </View>
            
        </View>

        <View style={styles.package}>
            <View>
                    <Text style={{
                        fontSize: 30, 
                       textAlign: 'center',
                       fontWeight: 'bold'
                    }}>EXECUTIVE</Text>
      <Image
        style={{
            width: '100%', 
        }}
        source={require('../images/hostnali.png')}
      />
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold' ,
                    
                    }}>Fully Loaded plan for heavy Traffic</Text>
            </View>
            <View>
                <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center'
                }}
                >KSH. 7400/Year</Text>
                <Button title="ORDER" color="#32a852" onPress={()=>{
                    Linking.openURL('https://hostnali.co.ke/clients/aff.php?aff=92').catch(err=>{
                        console.log(err);
                    })
                
                }} />
            </View>
            <View>
                <Text style={styles.features}>Unlimited Domains + Free Domain</Text>
                <Text style={styles.features}>100GB NVMe Disk Space</Text>
                <Text style={styles.features}>1000GB Monthly Bandwidth</Text>
                <Text style={styles.features}>4GB RAM, Lightspeed web server</Text>
                <Text style={styles.features}>Unlimited Emails and Databases</Text>
                <Text style={styles.features}>Unlimited Subdomains</Text>
                <Text style={styles.features}>Free SSL Certificate</Text>
                <Text style={styles.features}>Free CPanel</Text>
                <Text style={styles.features}>New PHP 7.2,7.3,7.4</Text>
                <Text style={styles.features}>Node.js fully supported</Text>
                <Text style={styles.features}>Python/Django Fully Supported</Text>
            </View>
            
        </View>

        <View style={styles.package}>
            <View>
                    <Text style={{
                        fontSize: 30, 
                       textAlign: 'center',
                       fontWeight: 'bold'
                    }}>PLATINUM</Text>
      <Image
        style={{
            width: '100%', 
        }}
        source={require('../images/hostnali.png')}
      />
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold' ,
                    
                    }}>Fully Loaded plan for heavy Traffic</Text>
            </View>
            <View>
                <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center'
                }}
                >KSH. 9,950/Year</Text>
                <Button title="ORDER" color="#32a852" onPress={()=>{
                    Linking.openURL('https://hostnali.co.ke/clients/aff.php?aff=92').catch(err=>{
                        console.log(err);
                    })
                
                }} />
            </View>
            <View>
                <Text style={styles.features}>Unlimited Domains + Free Domain</Text>
                <Text style={styles.features}>100GB NVMe Disk Space</Text>
                <Text style={styles.features}>Unlimited Bandwidth</Text>
                <Text style={styles.features}>4GB RAM, Lightspeed web server</Text>
                <Text style={styles.features}>Unlimited Emails and Databases</Text>
                <Text style={styles.features}>Unlimited Subdomains</Text>
                <Text style={styles.features}>Free SSL Certificate</Text>
                <Text style={styles.features}>Free CPanel</Text>
                <Text style={styles.features}>New PHP 7.2,7.3,7.4</Text>
                <Text style={styles.features}>Node.js fully supported</Text>
                <Text style={styles.features}>Python/Django Fully Supported</Text>
            </View>
            
        </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    features: {
        borderBottomWidth: 1,
        padding: 8
    },
    package: {
        padding: 8,
        margin:3,
        borderWidth:2,
        borderColor: 'gray',
        borderRadius:14
    }
})

export default Host