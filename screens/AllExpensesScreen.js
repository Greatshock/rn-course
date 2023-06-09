import React from 'react';
import { StyleSheet } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput';
import { useSelector } from 'react-redux';

export function AllExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod='Total'
      fallbackText='No expenses registered expenses found.'
    />
  );
}

const styles = StyleSheet.create({});
