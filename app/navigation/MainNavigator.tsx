import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExpanseScreen from "@screens/addExpense";
import HomeScreen from "@screens/home";
import PreferecesScreen from "@screens/preferences";
import StatisticsScreen from "@screens/statiscitcs";
import { routes } from "@utils/routes";

const MainNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
        <Stack.Screen name={routes.SCREEN_HOME} component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={routes.SCREEN_ADD_EXPANSE} component={AddExpanseScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={routes.SCREEN_PREFERENCES} component={PreferecesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={routes.SCREEN_STATISCTICS} component={StatisticsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    );
}


export default MainNavigator