import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
function Devs() {
  return (
    <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Restaurant Application</Text>
                <Text>Do you want to reserve a special corner or central table for your date? reservation apps make this easy. All it takes is choosing the desired seats and time in advance, then booking them on our app!</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Bike servicing app</Text>
                <Text>a door-step bike servicing platform and application that will employ technology to make it easier for owners of two-wheelers to connect with reliable vehicle care providers. The platform can offer aided door-step pickup and delivery, a built-in inventory management system that reduces waiting times, more intelligent stock allocation, a system for managing orders, etc.</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Fitness App</Text>
                <Text>An online tool for maintaining a healthy lifestyle that allows users to track their activities with the help of trained nutritionists, pathologists, and health coaches would ultimately reduce the chance of developing lifestyle disorders.
                      The application will come with a number of charts that may be used by the user to manage their overall health, including their weight, blood sugar, heart rate, and blood pressure. Additionally, the user is provided with personalized food plans, lifestyle plans, and nutrition programs tailored to their needs. Additionally, it will incorporate a chat feature that enables users to communicate with both the local community and medical professionals.</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Language learning app</Text>
                <Text>One of the best app concepts for 2022 is a language learning app that provides users with some basic courses in several languages. The program has various difficulty levels, from the beginner level, which focuses on alphabets and fundamental letters, to the intermediate level, which includes full-fledged discussions. The voice feature of the app allows users to hear how words are pronounced.</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>School notices app</Text>
                <Text>The school notifications app is a fantastic tool for parents to keep up with everything happening at the institution where their children are receiving their education. This includes significant details like future events they might be interested in going to as well as crucial data like reports cards, attendance statistics, and snow/rainy day holidays! No longer just in elementary schools, but at all grade levels, teachers now have the option of submitting images or videos to improve learning opportunities.</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Groceries cost/compare/order app</Text>
                <Text>An app that accepts your input for food products and compares the costs of each item across all nearby grocery stores. Additionally, the app can display better prices for the things the user wants to buy. For instance, if you want to buy beef, the app will automatically display the stores where there are deals available. There are already grocery ordering apps, but by including a cost comparison function and collaborating with nearby stores, your grocery app will stand out to users.</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Social networking app for single parents</Text>
                <Text>This is one of the best app ideas that will be popular in 2022. It comes under social networking. The concept is to match single parents with similar interests and kids in the same age group in order to share thoughts, parenting advice, tips etc.</Text>
            </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: 'white',
        margin: 4
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        
    }
})
export default Devs