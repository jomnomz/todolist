import uuid from 'react-native-uuid'
import { View, Text, StyleSheet, FlatList, Switch, TextInput } from 'react-native'
import Button from '../components/ui/button.jsx'
import Input from '../components/ui/input.jsx'
import { useState } from 'react'

export default function App(){

    const [entry, setEntry] = useState([
        {
            id: uuid.v4(),
            value: "",
            completed: false,
        }
    ]);

    const handleAddNewEntry= () => {
        setEntry(prev => [
            ...prev,
            {
                id: uuid.v4(),
                value: "",
                completed: false,
            }
        ])
    }

    const handleEntryChange = (id, text) => {
        setEntry(prev => prev.map(e => e.id === id  ? {...e, value: text} : e));
    }

    const handleCompletedEntry = (id) => {
        setEntry(prev => prev.map(e => e.id === id ? { ...e, completed: !e.completed } : e ));
    }

    const handleDeleteEntry = (id) => {
        setEntry(prev => prev.filter(e => e.id != id))
    }

    return(
        <View style={styles.container} >
            <FlatList 
                style={styles.entryContainer}
                data={entry.filter(e => !e.completed)}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.entry} >
                            <Button style={{marginLeft: 10}} variant={item.completed ? "secondary" : "pure"} onPress={() => handleCompletedEntry(item.id)}/>
                            <TextInput  placeholderTextColor="white" style={{color: 'white',}} value={item.value} onChangeText={(text) => handleEntryChange(item.id, text)} placeholder="Enter task"></TextInput>
                            <Button variant={"secondary"} onPress={() => handleDeleteEntry(item.id)}><Text>x</Text></Button>
                        </View>
                        
                    )
                }}
            ></FlatList>

            <Button onPress={handleAddNewEntry}><Text style={{color: 'white',}}>Add New +</Text></Button>
            <Text>Checked List</Text>

            <FlatList 
                style={styles.entryContainer}
                data={entry.filter(e => e.completed)}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.entry} >
                            <Button style={{marginLeft: 10}} variant={item.completed ? "secondary" : "pure"} onPress={() => handleCompletedEntry(item.id)}></Button>
                            <TextInput placeholderTextColor="white" style={styles.entryInput} value={item.value} onChangeText={(text) => handleEntryChange(item.id, text)} placeholder="Enter task"></TextInput>
                            <Button variant={"secondary"} onPress={() => handleDeleteEntry(item.id)}><Text>x</Text></Button>
                        </View>
                        
                    )
                }}
            ></FlatList>

        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            flex: 1,
            marginTop: 70
        },


        entryContainer: {
            display: 'flex',
            width: 300,
        },

        entryInput: {
            color: 'white',
            borderWidth: 0,
             borderColor: 'transparent',
        },

        entry: { 
            backgroundColor: 'green',
            color: 'white',
            display: 'flex',
            marginBottom: 10,
            border: 1,
            borderRadius: 5,
            padding: 10,
            paddingLeft: 10,
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
        },
    })