import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e5e5',
    },
    iosHeader: {
      paddingTop: 20,
    },
    leftButton: {
      position: 'absolute',
      left: 15,
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logoutButton: {
      position: 'absolute',
      paddingHorizontal: 15,
      right:0
    },
    logoutText: {
      fontSize: 16,
      color: 'blue',
    },
  });

  export { styles }