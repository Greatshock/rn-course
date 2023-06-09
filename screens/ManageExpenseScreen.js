import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { Button } from '../components/UI/Button';
import { useDispatch } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../store/store';
import { getFormattedDate } from '../utils/date';

export function ManageExpenseScreen({ navigation, route }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

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

  function confirmHandler() {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: expenseId,
          data: {
            description: 'Test Updated',
            amount: 99.99,
          },
        })
      );
    } else {
      dispatch(
        addExpense({
          description: 'Test',
          amount: 29.99,
          date: new Date().toISOString(),
        })
      );
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 120,
    marginHorizontal: 8,
  },
});
