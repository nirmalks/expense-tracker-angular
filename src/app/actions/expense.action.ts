import { createAction, props } from '@ngrx/store';
import Expense from '../expenses/models/expense';

export enum ExpenseActionType {
    getAllExpenses = '[Expense] Get all expenses',
    getExpense = '[Expense] Get expense',
    createExpense = '[Expense] Create expense',
    updateExpense = '[Expense] Update expense',
    deleteExpense = '[Expense] Delete expense',
    getAllExpensesSuccess = '[Expense API] Load Expenses Success',
    getAllExpensesFailure = '[Expense API] Load Expenses Failure',
    updateExpenseSuccess = '[Expense API] Update Expense Success',
    updateExpenseFailure = '[Expense API] Update Expense Failure',
    deleteExpenseSuccess = '[Expense API] Delete Expense Success',
    deleteExpenseFailure = '[Expense API] Delete Expense Failure',
    createExpenseSuccess = '[Expense API] Create Expense Success',
    createExpenseFailure = '[Expense API] Create Expense Failure',
}

export const getExpenses = createAction(
    ExpenseActionType.getAllExpenses,
    props<{ expenses: Expense[] }>()
);

export const getExpense = createAction(
    ExpenseActionType.getExpense,
    props<{ expenses: Expense }>()
);

export const createExpense = createAction(
    ExpenseActionType.createExpense,
    props<{ expense: Expense }>()
);

export const updateExpense = createAction(
    ExpenseActionType.updateExpense,
    props<{ expense: Expense }>()
);

export const deleteExpense = createAction(
    ExpenseActionType.deleteExpense,
    props<{ expenseId: string }>()
);

export const getAllExpensesSuccess = createAction(
    ExpenseActionType.getAllExpensesSuccess,
    props<{ expenses: any }>()
);

export const updateExpenseSuccess = createAction(
    ExpenseActionType.updateExpenseSuccess,
    props<{ expense: Expense }>()
);

export const deleteExpenseSuccess = createAction(
    ExpenseActionType.updateExpenseSuccess
);