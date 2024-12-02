import Header from "@components/Header";
import { ReactElement, useState } from "react";
import { Alert, View } from "react-native";
import Button from "@components/Button";
import styles from "./styles";
import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { RootParamList } from "@utils/routes";
import InputField from "@components/InputField";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app-redux/hooks";
import { setMonthlyLimit, setWeeklyLimit } from "@app-redux/slice/preference/preference.slice";
import { RootState } from "@app-redux/store/store";

function PreferencesScreen(): ReactElement {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationContainerRef<RootParamList>>();

  const { weeklyLimit, monthlyLimit } = useSelector((state: RootState) => state.preferences);

  const [weeklyLimitState, setWeeklyLimitState] = useState(weeklyLimit);
  const [weeklyLimitStateError, setWeeklyLimitStateError] = useState('');
  const [monthlyLimitState, setMonthlyLimitState] = useState(monthlyLimit);
  const [monthlyLimitStateError, setMonthlyLimitStateError] = useState('');

  const handleLeftButtonPress = () => navigation.goBack();

  const validateLimits = (): boolean => {
    let isValid = true;

    // Reset error messages
    setWeeklyLimitStateError('');
    setMonthlyLimitStateError('');

    // Validate Weekly Amount
    if (!weeklyLimitState.trim()) {
      setWeeklyLimitStateError('Weekly Amount is required.');
      isValid = false;
    } else {
      const weeklyAmount = parseFloat(weeklyLimitState);
      if (isNaN(weeklyAmount) || weeklyAmount <= 0) {
        setWeeklyLimitStateError('Please enter a valid weekly amount greater than 0.');
        isValid = false;
      }
    }

    // Validate Monthly Amount
    if (!monthlyLimitState.trim()) {
      setMonthlyLimitStateError('Monthly Amount is required.');
      isValid = false;
    } else {
      const monthlyAmount = parseFloat(monthlyLimitState);
      if (isNaN(monthlyAmount) || monthlyAmount <= 0) {
        setMonthlyLimitStateError('Please enter a valid monthly amount greater than 0.');
        isValid = false;
      }
    }

    return isValid;
  };

  // Handle changing Weekly Amount and updating Monthly Amount accordingly
  const handleWeeklyLimitChange = (newWeeklyLimit: string) => {
    setWeeklyLimitState(newWeeklyLimit);

    const weeklyAmount = parseFloat(newWeeklyLimit);
    if (!isNaN(weeklyAmount) && weeklyAmount > 0) {
      const newMonthlyLimit = (weeklyAmount * 4).toFixed(2); // Multiply weekly by 4 for approximate monthly limit
      setMonthlyLimitState(newMonthlyLimit);
    } else {
      setMonthlyLimitState('');
    }
  };

  // Handle changing Monthly Amount and updating Weekly Amount accordingly
  const handleMonthlyLimitChange = (newMonthlyLimit: string) => {
    setMonthlyLimitState(newMonthlyLimit);

    const monthlyAmount = parseFloat(newMonthlyLimit);
    if (!isNaN(monthlyAmount) && monthlyAmount > 0) {
      const newWeeklyLimit = (monthlyAmount / 4).toFixed(2);
      setWeeklyLimitState(newWeeklyLimit);
    } else {
      setWeeklyLimitState('');
    }
  };

  // Handle form submission (Save preferences)
  const handleSavePreferences = () => {
    const isFormValid = validateLimits();

    if (isFormValid) {
      dispatch(setMonthlyLimit(monthlyLimitState));
      dispatch(setWeeklyLimit(weeklyLimitState));

      Alert.alert('Success', 'Preferences saved successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <View style={styles.container}>
      <Header
        showLeftButton
        title="Preferences"
        onLeftButtonPress={handleLeftButtonPress}
      />

      <View style={styles.formContainer}>
        {/* Input Field for Weekly Amount */}
        <InputField
          label="Weekly Amount"
          placeholder="Weekly Amount"
          value={weeklyLimitState}
          onChangeText={handleWeeklyLimitChange}
          error={weeklyLimitStateError}
          keyboardType="number-pad"
          inputMode="numeric"
        />

        {/* Input Field for Monthly Amount */}
        <InputField
          label="Monthly Amount"
          placeholder="Monthly Amount"
          value={monthlyLimitState}
          onChangeText={handleMonthlyLimitChange}
          error={monthlyLimitStateError}
          keyboardType="number-pad"
          inputMode="numeric"
        />

        {/* Save Button */}
        <Button title="Save" onPress={handleSavePreferences} />
      </View>
    </View>
  );
};

export default PreferencesScreen;