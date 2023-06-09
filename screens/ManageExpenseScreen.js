import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../store/store';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';

export function ManageExpenseScreen({ navigation, route }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const expenses = useSelector((state) => state.expenses.expenses);
  const selectedExpense = expenses.find((e) => e.id === expenseId);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    dispatch(deleteExpense({ id: expenseId }));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      dispatch(updateExpense({ id: expenseId, data: expenseData }));
    } else {
      dispatch(addExpense(expenseData));
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpense}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
