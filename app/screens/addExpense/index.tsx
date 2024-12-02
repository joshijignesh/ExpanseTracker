import FloatingButton from "@components/FloatingButton";
import Header from "@components/Header";
import { ReactElement, useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { RootParamList } from "@utils/routes";
import InputField from "@components/InputField";
import DropdownField from "@components/DropdownField";
import { addExpense } from "@app-redux/slice/expanses/expanses.slice";
import { useDispatch } from "react-redux";
import moment from "moment";
import Button from "@components/Button";
import AddExpanseController from "./controller";

function  AddExpanseScreen() : ReactElement {

  const {
    expanseName,
    setExpanseName,
    expanseDescription,
    setExpanseDescription,
    selectedOptionError,
    expanseAmountError,
    expanseNameError,
    setSelectedOption,
    expanseAmount,
    selectedOption,
    setExpanseAmount,
    options,    
    handleAddExpanse
    } = AddExpanseController()
    
  return (
    <View style={styles.container}>
      <Header
        showLeftButton
        title="Add Expanse"
      />
      
      <View style={styles.formContainer}>
        <InputField
            placeholder="Expanse Name"
            value={expanseName}
            onChangeText={setExpanseName}
            error={expanseNameError}
          />
          
          <InputField
            placeholder="Expanse Description"
            value={expanseDescription}
            onChangeText={setExpanseDescription}
          />

          <InputField
            placeholder="Expanse Amount"
            value={expanseAmount}
            onChangeText={setExpanseAmount}
            error={expanseAmountError}
            keyboardType="number-pad"
            inputMode="numeric"
          />

          <DropdownField
            value={selectedOption}
            onValueChange={setSelectedOption}
            options={options}
            placeholder="Select Expanse Type"
            error={selectedOptionError}
          />

        <Button title="Add Expanse" onPress={handleAddExpanse} />  

      </View>

      
      </View>
    );
  };
  
export default AddExpanseScreen

