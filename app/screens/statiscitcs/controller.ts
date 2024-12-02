import { useMemo, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '@app-redux/store/store';

export const useStatisticController = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(moment().format('MM-YYYY'));

  const { weeklyLimit, monthlyLimit } = useSelector((state: RootState) => state.preferences);
  const expenses = useSelector((state: RootState) => state.expanses.expenses);

  const calculateTotalAmount = (data: { category: string; amount: number }[]) => {
    return data.reduce((acc, item) => acc + item.amount, 0);
  };

  const totalWeeklyExpense = useMemo(() => calculateTotalAmount(expenses), [expenses]);
  const totalMonthlyExpense = useMemo(() => calculateTotalAmount(expenses), [expenses]);

  const checkLimit = (amount: number, limit: number) => {
    if (amount > limit) {
      return { status: 'warning', message: 'You have exceeded the limit!' };
    }
    return { status: 'success', message: `You have saved ${limit - amount} amount` };
  };

  const weeklyLimitStatus = checkLimit(totalWeeklyExpense, weeklyLimit as unknown as number);
  const monthlyLimitStatus = checkLimit(totalMonthlyExpense, monthlyLimit as unknown as number);

  return {
    selectedMonth,
    setSelectedMonth,
    weeklyLimitStatus,
    monthlyLimitStatus,
    totalWeeklyExpense,
    totalMonthlyExpense,
  };
};
