import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import Expense from '../models/expense.model';

export enum ExpenseActionType {
  loadExpenses = '[Expense] Get all expenses',
  getExpense = '[Expense] Get expense',
  addExpense = '[Expense] Create expense',
  updateExpense = '[Expense] Update expense',
  deleteExpense = '[Expense] Delete expense',
  loadExpensesSuccess = '[Expense API] Load Expenses Success',
  loadExpensesFailure = '[Expense API] Load Expenses Failure',
  updateExpenseSuccess = '[Expense API] Update Expense Success',
  updateExpenseFailure = '[Expense API] Update Expense Failure',
  deleteExpenseSuccess = '[Expense API] Delete Expense Success',
  deleteExpenseFailure = '[Expense API] Delete Expense Failure',
  addExpenseSuccess = '[Expense API] Create Expense Success',
  addExpenseFailure = '[Expense API] Create Expense Failure',
}

export const loadExpenses = createAction(
  ExpenseActionType.loadExpenses, 
  props<{ expenses: Expense[] }>()
);

export const loadExpensesSuccess = createAction(
  ExpenseActionType.loadExpensesSuccess, 
  props<{ expenses: Expense[] }>()
);

export const loadExpensesFailure = createAction(
    ExpenseActionType.loadExpensesFailure,
    props<{ error: string }>()
);

export const addExpense = createAction(
  ExpenseActionType.addExpense,
  props<{ expense: Expense }>()
);

export const addExpenseSuccess = createAction(
  ExpenseActionType.addExpenseSuccess, 
  props<{ expense: Expense }>()
);

export const addExpenseFailure = createAction(
    ExpenseActionType.addExpenseFailure,
    props<{ error: string }>()
);

export const upsertExpense = createAction(
  '[Expense/API] Upsert Expense',
  props<{ expense: Expense }>()
);

export const addExpenses = createAction(
  '[Expense/API] Add Expenses',
  props<{ expenses: Expense[] }>()
);

export const upsertExpenses = createAction(
  '[Expense/API] Upsert Expenses',
  props<{ expenses: Expense[] }>()
);

export const updateExpense = createAction(
  ExpenseActionType.updateExpense,
  props<{ expense: Expense }>()
);

export const updateExpenseSuccess = createAction(
  ExpenseActionType.updateExpenseSuccess,
  props<{ expense: Update<Expense> }>()
);

export const updateExpenseFailure = createAction(
  ExpenseActionType.updateExpenseSuccess,
  props<{ error: string }>()
);

export const updateExpenses = createAction(
  '[Expense/API] Update Expenses',
  props<{ expenses: Update<Expense>[] }>()
);

export const deleteExpense = createAction(
  ExpenseActionType.deleteExpense,
  props<{ id: string }>()
);

export const deleteExpenseSuccess = createAction(
  ExpenseActionType.deleteExpenseSuccess
);

export const deleteExpenseFailure = createAction(
  ExpenseActionType.deleteExpenseSuccess,
  props<{ error: string }>()
);


export const deleteExpenses = createAction(
  '[Expense/API] Delete Expenses',
  props<{ ids: string[] }>()
);

export const clearExpenses = createAction(
  '[Expense/API] Clear Expenses'
);
