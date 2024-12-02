import { Colors } from '@utils/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    padding:12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cardAmountContainer: {
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  cardAmount: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textColor,
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
  },
  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export {styles}