import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/Login';
import Home from './components/Home';
import SignUp from './components/Signup';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
