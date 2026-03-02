import { View, Text, StyleSheet, FlatList, Switch, TextInput } from 'react-native'
import Button from '../components/ui/button.jsx'
import { useState } from 'react'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate("CheckList")}><Text style={{color: 'white',}}> + </Text></Button>
        </View>
    )
}

 const styles = StyleSheet.create({
    
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    button: {
        display: 'flex',
        position: 'absolute',
        bottom: 100,
        right: 20
    }

 })