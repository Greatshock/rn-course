import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from './Input';
import { Button } from '../UI/Button';
import { getFormattedDate } from '../../utils/date';
import { GlobalStyles } from '../../constants/styles';

export function ExpenseForm({
  defaultValues,
  submitButtonLabel,
  onCancel,
  onSubmit,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangedHandler(inputId, enteredValue) {
    setInputs((inputs) => ({
      ...inputs,
      [inputId]: { value: enteredValue, isValid: true },
    }));
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValud =
      inputs.date.value && expenseData.date !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (amountIsValid && dateIsValud && descriptionIsValid) {
      expenseData.date = expenseData.date.toISOString();
      onSubmit(expenseData);
    } else {
      setInputs((inputs) => ({
        amount: { value: inputs.amount.value, isValid: amountIsValid },
        date: { value: inputs.date.value, isValid: dateIsValud },
        description: {
          value: inputs.description.value,
          isValid: descriptionIsValid,
        },
      }));
    }
  }

  const formIsValid =
    inputs.amount.isValid && inputs.date.isValid && inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value: inputs.amount.value,
            onChangeText: inputChangedHandler.bind(this, 'amount'),
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: inputs.date.value,
            onChangeText: inputChangedHandler.bind(this, 'date'),
          }}
        />
      </View>
      <Input
        label='Description'
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          value: inputs.description.value,
          onChangeText: inputChangedHandler.bind(this, 'description'),
        }}
      />
      {!formIsValid && (
        <Text style={styles.errorText}>Invalid input values</Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
