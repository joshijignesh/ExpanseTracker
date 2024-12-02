import { RootState } from "@app-redux/store/store";
import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { RootParamList, routes } from "@utils/routes";
import { useLayoutEffect } from "react";
import { InteractionManager } from "react-native";
import { useSelector } from "react-redux";

const useLoadingController = () => {
    const navigation = useNavigation<NavigationContainerRef<RootParamList>>();

    const isLoggedIn = useSelector((state: RootState) => state.global.isLoggedIn);

    useLayoutEffect(() => {
        handleRedirection();
    }, [isLoggedIn]);

    const handleRedirection = () => {
        InteractionManager.runAfterInteractions(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: isLoggedIn ? routes.SCREEN_MAIN : routes.SCREEN_AUTH }],
            });
        });
    };

    return {}
}

export default useLoadingController;