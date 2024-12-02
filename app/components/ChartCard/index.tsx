import { LimitStatus } from '@screens/statiscitcs';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { styles } from './styles';

const screenWidth = Dimensions.get('window').width;

interface ChartCardProps {
  title: string;
  pieChartData: any[];
  limitStatus: LimitStatus;
  limitMessage: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, pieChartData, limitStatus, limitMessage }) => {

  const limitStatusStyle = (status: LimitStatus) => ({
    color: status === 'warning' ? 'red' : 'green',
    fontWeight: 'bold' as 'bold',
    fontSize: 16,
    marginTop: 10,
  });
  const isEmptyData = pieChartData.length === 0;

  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
     {isEmptyData ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>No Data Available</Text>
        </View>
      ) : (
        <>
          <PieChart
            data={pieChartData}
            width={screenWidth - 56}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            center={[0, 0]}
            absolute 
          />
        </>
      )}
      <Text style={limitStatusStyle(limitStatus)}>
        {limitMessage}
      </Text>
    </TouchableOpacity>
  );
};

export default ChartCard;
