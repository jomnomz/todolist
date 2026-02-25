import { View, Text, StyleSheet, FlatList } from 'react-native'
import Button from '../components/ui/button.jsx'
import Input from '../components/ui/input.jsx'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

export default function App(){

    const [inputTask, setInputTask] = useState("");
    const [task, setTask] = useState([]);

    const handleTaskChange = (text) => {
        setInputTask(text)
    }

    const handleSubmit = () => {
        setTask([... task,{
            id: uuidv4(), value: inputTask 
        }])
    }

    return(
        <View style={styles.container} >
            <View style={styles.inputAndButtonContainer}>
                <Input value={inputTask} onChangeText={handleTaskChange} placeholder={"Enter a task"}></Input>
                <Button onPress={handleSubmit}><Text style={{ color: 'white' }}>Submit</Text></Button>
            </View>
            <FlatList 
                style={styles.taskContainer}
                data={task}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.task}>
                            <Text style={{ color: 'white' }}>{item.value}</Text>
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
            gap: '1rem',
            flex: 1
        },

        inputAndButtonContainer: { 
            display: 'flex',
            flexDirection: 'row',
            width: '80%',
            gap: '1rem',
            // backgroundColor: 'red',
            marginTop: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            
        },

        taskContainer: {
            display: 'flex',
            width: '80%',
            
        },

        task: { 
            backgroundColor: 'green',
            color: 'white',
            display: 'flex',
            marginBottom: '5px',
            border: '1px solid',
            borderRadius: '5px',
            padding: '0.3rem',
            paddingLeft: '0.8rem'
        }
    })