import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Icons } from '@utils/icons';
import { styles } from './styles';
import { NavigationContainerRef, useNavigation } from '@react-navigation/native';
import { RootParamList, routes } from '@utils/routes';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '@app-redux/slice/global/global.slice';

interface HeaderProps {
  title: string;
  onLeftButtonPress?: () => void;
  showLeftButton: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onLeftButtonPress,
  showLeftButton,
}) => {

  const navigation = useNavigation<NavigationContainerRef<RootParamList>>();
  const dispatch = useDispatch()
    const onLogoutPress = () => {
      dispatch(setIsLoggedIn(false))
      navigation.reset({
        index: 0,
        routes: [{name: routes.SCREEN_AUTH}]
    })
    }
    
  return (
    <View style={[styles.headerContainer, Platform.OS === 'ios' && styles.iosHeader]}>

      {showLeftButton ? (
        <TouchableOpacity style={styles.leftButton} onPress={() =>onLeftButtonPress ? onLeftButtonPress() : navigation.goBack()}>
             <Icons.Back width={30} />
        </TouchableOpacity>
      ) : <View style={styles.leftButton} />}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogoutPress}>
       <Icons.Logout width={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
