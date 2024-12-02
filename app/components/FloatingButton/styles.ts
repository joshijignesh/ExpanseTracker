import { Colors } from "@utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    floatingButton: {
      zIndex:12,
      backgroundColor: Colors.buttonColor,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 30,
      right: 30,
      elevation: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: Colors.white,
      fontSize: 30,
    },
    optionsContainer: {
      position: 'absolute',
      bottom: 100,
      right:50,
      zIndex:999,
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderRadius: 10,
      width: '50%',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: -2 },
      paddingVertical: 15,
      elevation: 4,
    },
    option: {
      paddingVertical: 10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionItem: {
      flexDirection: 'row', // Align icon and text horizontally
      alignItems: 'center', // Vertically center the items
      paddingVertical: 10,
      width: '100%',
    },
    icon: {
      marginRight: 10, // Space between the icon and text
    },
    optionText: {
      fontSize: 16,
      color: '#333',
    },
    
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  });

  export { styles }