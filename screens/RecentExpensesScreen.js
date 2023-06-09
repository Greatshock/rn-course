import React from 'react';
import { StyleSheet } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput';

export function RecentExpensesScreen() {
  return <ExpensesOutput expensesPeriod='Last 7 Days' />;
}

const styles = StyleSheet.create({});
