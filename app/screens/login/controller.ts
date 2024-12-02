import { useAppDispatch } from "@app-redux/hooks";
import { setExpenses } from "@app-redux/slice/expanses/expanses.slice";
import { setIsLoggedIn, setUserEmail } from "@app-redux/slice/global/global.slice";
import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { firebase } from "@utils/firebaseConfig";
import { RootParamList, routes } from "@utils/routes";
import { validateEmail } from "@utils/utils";
import { useState } from "react";
import { Alert } from "react-native";

const useLoginController =() => {
    const navigation = useNavigation<NavigationContainerRef<RootParamList>>();

  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleLogin = () => {
    setEmailError('');

    if (!email) {
      setEmailError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setPasswordError('Password is required.');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Minimum 6-digit password required.');
      return;
    }

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential: any) => {
      const user = userCredential.user;
      Alert.alert('Success', `Welcome back, ${user.email}`);
      dispatch(setIsLoggedIn(true))
      dispatch(setUserEmail(user.email ?? ''))
      dispatch(setExpenses([]))
      navigation.reset({
        index: 0,
        routes: [{ name: routes.SCREEN_MAIN }]
      })
    })
    .catch((error: any) => {
      const errorMessage = error.message;
      Alert.alert('Error', errorMessage);
    });

    
  };

  const redirectToSignUp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: routes.SCREEN_SIGN_UP }]
    })
  }

  return {
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    handleLogin,
    redirectToSignUp
  }

}

export default useLoginController;