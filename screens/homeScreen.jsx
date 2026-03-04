import { View, Text, StyleSheet, FlatList } from 'react-native'
import Button from '../components/ui/button.jsx'
import { useChecklist } from '../context/checklistContext'

export default function HomeScreen({navigation}){

    const { checklists, deleteChecklist } = useChecklist();

    return(
        <View style={styles.container}>

            <FlatList
                data={checklists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={{color: 'white'}}>{item.title}</Text>

                        <Button 
                          variant="secondary"
                          onPress={() => deleteChecklist(item.id)}
                        >
                          <Text style={{color: 'white'}}>x</Text>
                        </Button>
                    </View>
                )}
            />

            <Button 
                style={styles.button} 
                onPress={() => navigation.navigate("CheckList")}
            >
                <Text style={{color: 'white'}}> + </Text>
            </Button>

        </View>
    )
}

 const styles = StyleSheet.create({
    
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20,
    },

    card: {
        backgroundColor: 'purple',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10
    },

    button: {
        display: 'flex',
        position: 'absolute',
        bottom: 100,
        right: 20
    }

 })