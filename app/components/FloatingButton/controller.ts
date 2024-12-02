import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { Icons } from "@utils/icons";
import { RootParamList, routes } from "@utils/routes";
import { useState } from "react";
import { Animated, Easing } from "react-native";

const useFlotinButtinController = () => {

    const navigation = useNavigation<any>();

    const [showOptions, setShowOptions] = useState(false);
    const [animationValue] = useState(new Animated.Value(0));
    const [iconRotation] = useState(new Animated.Value(0));

    const flotingOptions = [
        {
            id: 1,
            option: "preferences",
            title: "Preferences",
            icon: Icons.Setting
        }, {
            id: 2,
            option: "statistic",
            title: "Statistic",
            icon: Icons.Statistics
        }, {
            id: 3,
            option: "add-expanse",
            title: "Add Expanse",
            icon: Icons.Pen
        }]

    const toggleMenu = () => {
        if (showOptions) {
            closeMenu()
            return
        }
        const toValue = showOptions ? 0 : 1;

        setShowOptions(!showOptions);

        Animated.timing(iconRotation, {
            toValue: toValue,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start();
    };

    const handleOptionClick = (option: string) => {
        console.log(`Option selected: ${option}`);
        switch (option) {
            case 'add-expanse':
                navigation.navigate(routes.SCREEN_ADD_EXPANSE)
                break;
            case 'statistic':
                navigation.navigate(routes.SCREEN_STATISCTICS)
                break;
            case 'preferences':
                navigation.navigate(routes.SCREEN_PREFERENCES)
                break;
        }
        closeMenu();
    };

    const closeMenu = () => {
        setShowOptions(false);

        Animated.timing(animationValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(iconRotation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start();
    };

    const rotateIcon = iconRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    return { showOptions, flotingOptions, rotateIcon, handleOptionClick, closeMenu, toggleMenu }
}

export default useFlotinButtinController;