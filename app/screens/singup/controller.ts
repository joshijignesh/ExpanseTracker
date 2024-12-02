import { RootParamList, routes } from "@utils/routes";
import { Alert } from "react-native";
import auth from '@react-native-firebase/auth';
import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@app-redux/hooks";
import { useState } from "react";
import { validateEmail } from "@utils/utils";
import { setIsLoggedIn, setUserEmail } from "@app-redux/slice/global/global.slice";
import { setExpenses } from "@app-redux/slice/expanses/expanses.slice";

const useSingUpController = () => {
    const navigation = useNavigation<NavigationContainerRef<RootParamList>>();

  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleSingUp = () => {
    setEmailError('');

    if (!email) {
      setEmailError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if(!password){
      setPasswordError('Password is required.');
      return;
    }

    if(password.length < 6){
      setPasswordError('Minimum 6-digit password required.');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
          dispatch(setIsLoggedIn(true))
          dispatch(setUserEmail(email ?? ''))
          dispatch(setExpenses([]))
          navigation.reset({
            index: 0,
            routes: [{ name: routes.SCREEN_MAIN }]
          })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert("Email Already Registerd", "This email is already registed try to login it by typing valid password from login screen")
        }

        if (error.code === 'auth/invalid-email') {
          console.error('That email address is invalid!');
        }
        console.error(error);
      });
    return
  };

  const redirectToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: routes.SCREEN_LOGIN }]
    })
  }

  return {email, setEmail, emailError ,password, setPassword, passwordError, redirectToLogin, handleSingUp }
}

export default useSingUpController