import { Action, createReducer, createSelector, on, State } from "@ngrx/store";
import { AppState } from ".";
import Expense from "../expenses/models/expense";
import * as ExpenseActions from './../actions/expense.action';

export interface ExpensesState {
    expenses: Expense[]
}

const initialState: ExpensesState = {
    expenses:[]
}

const expensesReducer = createReducer(
    initialState,
    on(ExpenseActions.createExpense, state => ({...state})),
    on(ExpenseActions.getExpense, state => ({...state})),
    on(ExpenseActions.getExpenses, state => ({...state})),
    on(ExpenseActions.updateExpense, state => ({...state})),
    on(ExpenseActions.deleteExpense, state => ({...state})),
    on(ExpenseActions.getAllExpensesSuccess, (state, { expenses }) => ({
        ...state,
        expenses
    }))
)

export const selectAllExpense = (state: AppState) => state.data;
 
export const selectTopExpenses = createSelector(
    selectAllExpense,
    (state: ExpensesState) => state.expenses.slice(Math.max(state.expenses.length - 5, 0))
);

export function reducer(state: ExpensesState | undefined, action: Action) {
    return expensesReducer(state, action);
}