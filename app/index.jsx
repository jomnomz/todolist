import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/ui/button.jsx'
import Input from '../components/ui/input.jsx'
import { useState } from 'react'

export default function App(){

    const [task, setTask] = useState("");

    const handleTaskChange = (text) => {
        setTask(text)
    }

    const handlePress = () => {
        console.log({task})
    }

    return(
        <View>
            <Input value={task} onChangeText={handleTaskChange} placeholder={"Enter a task"}></Input>
            <Button onPress={handlePress}><Text>Submit</Text></Button>
        </View>
    )
}