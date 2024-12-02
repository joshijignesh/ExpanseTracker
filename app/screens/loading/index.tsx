import { ReactElement } from "react"
import { View, Text } from "react-native"
import useLoadingController from "./controller"

function LoadingScreen(): ReactElement {

    useLoadingController()

    return (<View style={{ flex: 1 }}>
        <Text>Loading</Text>
    </View>)
}

export default LoadingScreen