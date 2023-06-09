import React from 'react';
import { StyleSheet } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput';
import { useSelector } from 'react-redux';
import { getDateMinusDays } from '../utils/date';

export function RecentExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);

  const date7daysAgo = getDateMinusDays(new Date(), 7);
  const recentExpenses = expenses.filter(
    (e) => new Date(e.date) > date7daysAgo
  );

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 Days'
      fallbackText='No expenses registered expenses for the last 7 days.'
    />
  );
}

const styles = StyleSheet.create({});
