import uuid from 'react-native-uuid'
import { View, Text, StyleSheet, FlatList, Switch } from 'react-native'
import Button from '../components/ui/button.jsx'
import Input from '../components/ui/input.jsx'
import { useState } from 'react'

export default function App(){

    const [inputTask, setInputTask] = useState("");
    const [task, setTask] = useState([]);

    const handleTaskChange = (text) => {
        setInputTask(text)
    }

    const handleSubmit = () => {
        setTask([... task,{
            id: uuid.v4(), 
            value: inputTask,
            completed: false,
        }])
    }

    const handleCompletedTask = (id) => {
            setTask(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t ))
    }

    return(
        <View style={styles.container} >
            <View style={styles.inputAndButtonContainer}>
                <Input autoFocus={true} value={inputTask} onChangeText={handleTaskChange} placeholder={"Enter a task"}></Input>
                <Button onPress={handleSubmit}><Text style={{ color: 'white' }}>Submit</Text></Button>
            </View>
            <FlatList 
                style={styles.taskContainer}
                data={task.filter(t => !t.completed)}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.task} >
                            <Button variant={item.completed ? "secondary" : "pure"} onPress={() => handleCompletedTask(item.id)}/>
                            <Text style={{color: 'white',}}>{item.value}</Text>
                        </View>
                        
                    )
                }}
            ></FlatList>

        
            <Text>Checked List</Text>

            <FlatList 
                style={styles.taskContainer}
                data={task.filter(t => t.completed)}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.task}>
                            <Button variant="secondary" onPress={() => handleCompletedTask(item.id)}/>
                            <Text style={{color: 'white', textDecorationLine: 'line-through'}}>{item.value}</Text>
                        </View>
                    )
                }}
            />   

        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            flex: 1
        },

        inputAndButtonContainer: { 
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            // backgroundColor: 'red',
            marginTop: 60,
            justifyContent: 'center',
            alignItems: 'center',
            width: 350, //
        },


        taskContainer: {
            display: 'flex',
            width: 350,
            
        },

        task: { 
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