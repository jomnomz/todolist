import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChecklistProvider } from '../context/checklistContext';
import CheckListScreen from '../screens/checkListScreen.jsx';
import HomeScreen from '../screens/homeScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <ChecklistProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CheckList" component={CheckListScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </ChecklistProvider>
  )
}
