import moment from 'moment';
import { useMemo } from 'react';

export const useFilteredExpenses = (
  selectedMonth: string,
  expenses: any[],
  categoryColors: { [key: string]: string }
) => {
  const today = moment(); 
  const selectedMonthMoment = moment(selectedMonth, 'MM-YYYY');

  const getFilteredExpenses = useMemo(() => {
    const filteredData = expenses.filter((expense) => {
      const expenseDate = moment(expense.createTime, 'D-MM-YYYY');

      if (!today.isSame(selectedMonthMoment, 'month') && expenseDate.isAfter(today.clone().subtract(7, 'days'))) {
        return true; 
      }

      return expenseDate.isSame(selectedMonthMoment, 'month');
    });

    return filteredData;
  }, [selectedMonth, expenses, today]);

  const generatePieChartData = (filteredData: any[]) => {
    const categoryTotals: { [key: string]: number } = filteredData.reduce((acc, expense) => {
      if (acc[expense.category]) {
        acc[expense.category] += expense.amount;
      } else {
        acc[expense.category] = expense.amount;
      }
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(categoryTotals).map((category) => ({
      name: category,
      population: categoryTotals[category],
      color: categoryColors[category] || 'gray',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));
  };

  const weeklyPieChartData = useMemo(() => generatePieChartData(getFilteredExpenses), [getFilteredExpenses]);
  const monthlyPieChartData = useMemo(() => generatePieChartData(getFilteredExpenses), [getFilteredExpenses]);

  return { monthlyPieChartData, weeklyPieChartData };
};

export default useFilteredExpenses;
