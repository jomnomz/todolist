import { TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({ children, onPress, variant = 'primary', size = 'medium', style }){

    return(
        <TouchableOpacity 
            style={[styles.container, styles[variant], styles[size], style]} 
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 5,
    },

    primary: {
        backgroundColor: 'blue',
    },
    secondary: {
        backgroundColor: 'gray',
    },
    danger: {
        backgroundColor: 'red',
    },
    pure: {
        backgroundColor: 'white',
    },

    small: {
        padding: 5,
    },
    medium: {
        padding: 10,
    },
    large: {
        padding: 15,
    },
})
