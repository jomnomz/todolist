import { TextInput, StyleSheet } from 'react-native'

export default function Input({value, onChangeText, placeholder}){
    return(
        <TextInput  placeholderTextColor="white" style = {styles.container} value={value} onChangeText={onChangeText} placeholder={placeholder}/>
    )
}

 const styles = StyleSheet.create({
        container: {
            color: 'white',
            backgroundColor: 'gray',
            display: 'flex',
            width: 270,
            // border: '1px solid',
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20
        }
    })