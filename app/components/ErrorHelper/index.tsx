import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ErrorHelperProps {
  message: string | null;
}

const ErrorHelper: React.FC<ErrorHelperProps> = ({ message }) => {
  if (!message) return null;

  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default ErrorHelper;
