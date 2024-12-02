import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Icons } from '@utils/icons';

interface ExpenseCardProps {
  expense: {
    id: number;
    name: string;
    description: string;
    createTime: string;
    amount: number;
  };
  onDelete: () => void;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text numberOfLines={1} style={styles.cardTitle}>{expense.name}</Text>
        <Text numberOfLines={3} style={styles.cardDescription}>{expense.description}</Text>
        <Text style={styles.cardDate}>{expense.createTime}</Text>
      </View>
      <View style={styles.cardAmountContainer}>
        <Text style={styles.cardAmount}>₹{expense.amount}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Icons.Delete width={36} height={36} />
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseCard;
