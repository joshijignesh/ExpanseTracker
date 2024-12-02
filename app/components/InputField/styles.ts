import { Colors } from "@utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 15,
      marginBottom: 5,
    },
    inputError: {
      borderColor: 'red',
    },
    label: {
      marginVertical:4,
      color: Colors.textColor,
      fontWeight: '500'
    }
  });

  export {styles}