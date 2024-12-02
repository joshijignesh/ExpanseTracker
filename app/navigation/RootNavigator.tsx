import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { routes } from "@utils/routes"
import { ReactElement } from "react"
import MainNavigator from "./MainNavigator"
import LoadingScreen from "@screens/loading"
import AuthNavigator from "./AuthNavigator"

function RootNavigator(): ReactElement {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.SCREEN_LOADING}>
                <Stack.Screen name={routes.SCREEN_LOADING} component={LoadingScreen} options={{ headerShown: false }} />
                <Stack.Screen name={routes.SCREEN_MAIN} component={MainNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={routes.SCREEN_AUTH} component={AuthNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator