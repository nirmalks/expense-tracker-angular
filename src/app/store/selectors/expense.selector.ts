import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpensesData } from '../reducers/expense.reducer';
import * as fromExpense from '../reducers/expense.reducer';
import Expense from '../models/expense.model';

const getExpensesState = createFeatureSelector<ExpensesData>(fromExpense.expensesFeatureKey);

const getExpenses = createSelector(
    getExpensesState,
    fromExpense.selectAll
);
const getExpenseEntities = createSelector(
    getExpensesState,
    fromExpense.selectEntities
);

const getSelectedExpenseId = createSelector(
    getExpensesState,
    fromExpense.getSelectedExpenseId
);

const getSelectedExpense = createSelector(
  getExpenseEntities,
  getSelectedExpenseId,
  (expensesDictionary, id) => {
    return expensesDictionary[id];
  }
);

export const getTopExpenses  = createSelector(
    getExpenses,
    (expenses: Expense[]) => {
       return expenses.slice(Math.max(expenses.length - 5, 0));
    }
);

const getError = createSelector(
  getExpensesState,
  fromExpense.getError
);

export const expensesQuery = {
  getExpenses,
  getExpenseEntities,
  getSelectedExpenseId,
  getSelectedExpense,
  getTopExpenses,
  getError 
};