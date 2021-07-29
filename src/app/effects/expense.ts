import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ExpenseActionType } from '../actions/expense.action';
import Expense from '../expenses/models/expense';
import { ExpensesService } from './../services/expenses.service';
 
@Injectable()
export class ExpenseEffects {
    loadExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActionType.getAllExpenses),
            mergeMap(() => this.expensesService.getExpenses().pipe(
                map((expenses: Expense[]) =>
                (
                    { type: ExpenseActionType.getAllExpensesSuccess, expenses: expenses })
                ),
                catchError(() => of({ type: ExpenseActionType.getAllExpensesFailure }))
            ))
        )
    );

    updateExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActionType.updateExpense),
            mergeMap(({ expense }) => {
                return this.expensesService.updateExpense(expense).pipe(
                    map((expense: Object) =>
                    (
                        { type: ExpenseActionType.updateExpenseSuccess, expense: expense })
                    ),
                    catchError(() => of({ type: ExpenseActionType.updateExpenseFailure }))
                )
            })));

     createExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActionType.createExpense),
            mergeMap(({ expense }) => {
                return this.expensesService.createExpense(expense).pipe(
                    map((expense: Object) =>
                    (
                        { type: ExpenseActionType.createExpenseSuccess, expense: expense })
                    ),
                    catchError(() => of({ type: ExpenseActionType.createExpenseFailure }))
                )
            })));

    deleteExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActionType.deleteExpense),
            mergeMap(({expenseId}) => {
                return this.expensesService.deleteExpense(expenseId).pipe(
                    map(() => (
                        { type: ExpenseActionType.deleteExpenseSuccess })
                    ),
                    catchError(() => of({ type: ExpenseActionType.deleteExpenseFailure }))
                );})
        )
    );

    constructor(
        private actions$: Actions,
        private expensesService: ExpensesService
    ) { }
}