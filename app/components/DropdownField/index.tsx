import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import ErrorHelper from '@components/ErrorHelper';
import { styles } from './styles';

interface DropdownFieldProps {
  value: string; 
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[]; 
  placeholder: string;
  hidePlaceHolder?: boolean;
  error?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  value,
  onValueChange,
  options,
  placeholder,
  hidePlaceHolder = false,
  error,
}) => {
  return (
    <View style={styles.container}>
      {!hidePlaceHolder && <Text style={styles.placeholder}>{placeholder}</Text>}

      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={[styles.dropdown, error && styles.dropdownError]} 
      >
        <Picker.Item label={placeholder} value="" enabled={false} />
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>

      <ErrorHelper message={error ?? ''} />
    </View>
  );
};


export default DropdownField;
