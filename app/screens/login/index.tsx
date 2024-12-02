
import InputField from "@components/InputField";
import { ReactElement, } from "react";
import { View, Text } from "react-native";
import Button from "@components/Button";
import useLoginController from "./controller";
import { styles } from "./styles";

function LoginScreen(): ReactElement {
  
  const {
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    handleLogin,
    redirectToSignUp
  } = useLoginController()
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
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

      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.txtFooter}>Not Registered Yet ? <Text style={styles.txtFooterLink} onPress={redirectToSignUp}>register now</Text></Text>
    </View>
  );
};

export default LoginScreen;