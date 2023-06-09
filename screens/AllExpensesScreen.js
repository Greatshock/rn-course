import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { ExpensesOutput } from '../components/ExpenseOutput/ExpensesOutput';

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
