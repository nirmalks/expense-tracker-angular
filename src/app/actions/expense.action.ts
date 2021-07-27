import { createAction, props } from '@ngrx/store';
import Expense from '../expenses/models/expense';

export enum ExpenseActionType {
    getAllExpenses = '[Expense] Get all expenses',
    getExpense = '[Expense] Get expense',
    createExpense = '[Expense] Create expense',
    updateExpense = '[Expense] Update expense',
    deleteExpense = '[Expense] Delete expense'
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
    props<{ expenses: Expense }>()
);

export const updateExpense = createAction(
    ExpenseActionType.updateExpense,
    props<{ expendId: string, expenses: Expense }>()
);

export const deleteExpense = createAction(
    ExpenseActionType.deleteExpense,
    props<{ expendId: string }>()
);