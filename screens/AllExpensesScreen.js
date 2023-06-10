import { useContext } from 'react';
import { ExpensesOutput } from '../components/ExpenseOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

export function AllExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod='Total'
      fallbackText='No registered expenses found!'
    />
  );
}
