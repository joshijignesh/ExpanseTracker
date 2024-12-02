import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/login";
import SingUpScreen from "@screens/singup";
import { routes } from "@utils/routes";

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.SCREEN_LOGIN} component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={routes.SCREEN_SIGN_UP} component={SingUpScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator