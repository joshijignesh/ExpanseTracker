import { Colors } from "@utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    placeholder: {
      marginBottom: 5,
      fontSize: 14,
      color: '#6c6c6c',
    },
    dropdown: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 5,
    },
    dropdownError: {
      borderColor: Colors.errorColor,
    },
  });

  export {styles}