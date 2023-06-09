import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getFormattedDate } from '../utils/date';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-06-9'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: DUMMY_EXPENSES.map((e) => {
      e.date = e.date.toISOString();
      return e;
    }),
  },
  reducers: {
    addExpense: (state, { payload }) => {
      const id = Date.now().toString() + Math.random().toString;
      state.expenses.unshift({ ...payload, id });
    },
    deleteExpense: (state, { payload }) => {
      const expenseToDeleteIndex = state.expenses.findIndex(
        (e) => e.id === payload.id
      );
      state.expenses.splice(expenseToDeleteIndex, 1);
    },
    updateExpense: (state, { payload }) => {
      const index = state.expenses.findIndex((e) => e.id === payload.id);
      state.expenses[index] = { ...state.expenses[index], ...payload.data };
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;

export const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});
