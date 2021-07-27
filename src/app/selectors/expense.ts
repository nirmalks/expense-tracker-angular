import { createSelector } from '@ngrx/store';
import { ExpensesState } from '../reducers/expenses';
 
export interface AppState {
    expenses: ExpensesState;
  }
   
export const selectAllExpense = (state: AppState) => state.expenses;
 
export const selectTopExpenses = createSelector(
  selectAllExpense,
  (state: ExpensesState) => state.expenses.slice(Math.max(state.expenses.length - 5, 0))
);

