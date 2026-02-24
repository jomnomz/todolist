import { TextInput, StyleSheet } from 'react-native'

export default function Input({value, onChangeText, placeholder}){
    return(
        <TextInput  style = {styles.container} value={value} onChangeText={onChangeText} placeholder={placeholder}/>
    )
}

 const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white'
        }
    })