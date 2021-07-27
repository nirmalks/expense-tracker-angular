import { Action, createReducer, on, State } from "@ngrx/store";
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
    on(ExpenseActions.deleteExpense, state => ({...state}))
)

export function reducer(state: ExpensesState | undefined, action: Action) {
    return expensesReducer(state, action);
}