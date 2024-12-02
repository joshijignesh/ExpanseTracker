import ErrorHelper from '@components/ErrorHelper';
import { Colors } from '@utils/colors';
import React from 'react';
import { View, TextInput, StyleSheet, InputModeOptions, KeyboardTypeOptions, Text } from 'react-native';
import { styles } from './styles';

interface InputFieldProps {
  value: string;
  label?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
  inputMode?: InputModeOptions
  keyboardType?: KeyboardTypeOptions
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  inputMode='text',
  keyboardType ='default'
}) => {
  return (
    <View style={styles.container}>
      
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        inputMode={inputMode}
        keyboardType={keyboardType}
      />
      <ErrorHelper message={error ?? ''} />
    </View>
  );
};

export default InputField;
