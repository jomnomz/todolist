import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

export default function Button({children, onPress}){

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'gray'
        }
    })