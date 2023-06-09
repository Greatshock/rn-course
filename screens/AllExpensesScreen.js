import React from 'react';
import { StyleSheet } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput';

export function AllExpensesScreen() {
  return <ExpensesOutput expensesPeriod='Total' />;
}

const styles = StyleSheet.create({});
