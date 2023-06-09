import { View, StyleSheet, Text } from 'react-native';

import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

export function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses?.length ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.infoText}>{fallbackText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
