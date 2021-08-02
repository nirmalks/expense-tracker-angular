import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from ".";
import Expense from "../expenses/models/expense";
import * as ExpenseActions from './../actions/expense.action';

export interface ExpensesState {
    expenses: Expense[],
    getExpensesErrorMessage?: string
}

const initialState: ExpensesState = {
    expenses:[],
    getExpensesErrorMessage: null
}

const expensesReducer = createReducer(
    initialState,
    on(ExpenseActions.createExpense, state => ({...state})),
    on(ExpenseActions.getExpense, state => ({...state})),
    on(ExpenseActions.getExpenses, state => ({...state})),
    on(ExpenseActions.updateExpense, (state, { expense }) => (
        {
            ...state,
            ['expense._id']: expense
        })),
    on(ExpenseActions.deleteExpense, state => ({...state})),
    on(ExpenseActions.getAllExpensesSuccess, (state, { expenses }) => ({
        ...state,
        expenses
    })),
    on(ExpenseActions.getAllExpensesFailure, (state, { expenses, error }) => {
        return {
            ...state,
            expenses,
            getExpensesErrorMessage: error
        }
    }
    )
)

export const selectAllExpense = (state: AppState) => state.data;
 
export const selectTopExpenses = createSelector(
    selectAllExpense,
    (state: ExpensesState) => state.expenses.slice(Math.max(state.expenses.length - 5, 0))
);

export const selectAllExpenses = createSelector(
    selectAllExpense,
    (state: ExpensesState) => state.expenses
);

export const selectAllExpensesError = createSelector(
    selectAllExpense,
    (state: ExpensesState) => state.getExpensesErrorMessage
);

export function reducer(state: ExpensesState | undefined, action: Action) {
    return expensesReducer(state, action);
}