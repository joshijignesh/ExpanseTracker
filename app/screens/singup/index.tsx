import InputField from "@components/InputField";
import { ReactElement } from "react";
import { View, Text } from "react-native";
import Button from "@components/Button";
import useSingUpController from "./controller";
import { styles } from "./styles";

function SingUpScreen(): ReactElement {
  
const {email, setEmail, emailError ,password, setPassword, passwordError, redirectToLogin, handleSingUp } = useSingUpController()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sing Up</Text>

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
        inputMode="email"
        keyboardType="email-address"
      />

      <InputField
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        error={passwordError}
        inputMode="text"
        keyboardType="visible-password"
      />

      <Button title="SingUp" onPress={handleSingUp} />
      <Text style={styles.txtFooter}>Already have account ? <Text style={styles.txtFooterLink} onPress={redirectToLogin}>login now</Text></Text>
    </View>
  );
};




export default SingUpScreen;