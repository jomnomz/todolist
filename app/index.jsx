import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckListScreen from '../screens/checkListScreen.jsx'
import HomeScreen from '../screens/homeScreen.jsx'

export default function App(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name="CheckList" component={CheckListScreen} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
    )
}
