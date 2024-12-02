import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useStatisticController } from './controller';
import Header from '@components/Header';
import ChartCard from '@components/ChartCard';
import {  getUniqueMonths } from '@utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from '@app-redux/store/store';
import useFilteredExpenses from '@hooks/useFilteredExpenses';
import DropdownField from '@components/DropdownField';
import moment from 'moment';

export type LimitStatus = 'warning' | 'success';

const StatisticsScreen = () => {
  const { categoryColors } = useSelector(
    (state: RootState) => state.preferences
  );
  const expanses = useSelector((state: RootState) => state.expanses.expenses)
  const uniqueMonths = getUniqueMonths(expanses);
  
  const {
    selectedMonth,
    setSelectedMonth,
    weeklyLimitStatus,
    monthlyLimitStatus,
  } = useStatisticController();

  const { monthlyPieChartData, weeklyPieChartData } = useFilteredExpenses(
    selectedMonth, 
    expanses, 
    categoryColors
  );

    const handleMonthChange = (month: string) => {
      setSelectedMonth(moment(month, 'MMM YY').format('MM-YYYY'));
    };

  return (
    <View style={styles.container}>
      <Header showLeftButton title="Statistics" />

      <View style={styles.innerContinaer}>

      <DropdownField
        hidePlaceHolder
        value={moment(selectedMonth, 'MM-YYYY').format("MMM YY")}
        onValueChange={handleMonthChange}
        options={uniqueMonths.map((month) => ({
          label: month,
          value: month,
        }))}
        placeholder="Select Month"
      />

      <ChartCard
        title="Weekly Expanse Report"
        pieChartData={weeklyPieChartData}
        limitStatus={weeklyLimitStatus.status as any}
        limitMessage={weeklyLimitStatus.message}
      />

      <ChartCard
        title="Monthly Expanse Report"
        pieChartData={monthlyPieChartData}
        limitStatus={monthlyLimitStatus.status as any}
        limitMessage={monthlyLimitStatus.message}
      />

      </View>
    </View>
  );
};

export default StatisticsScreen;
