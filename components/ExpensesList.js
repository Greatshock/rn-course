import { FlatList } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

export function ExpensesList({ expenses }) {
  function renderExpenseItem({ item }) {
    return <ExpenseItem {...item} />;
  }

  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
}
