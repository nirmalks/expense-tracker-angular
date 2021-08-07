import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenseActionType } from '../actions/expense.actions';
import Expense from '../models/expense.model';
 
@Injectable()
export class ExpenseEffects {
    loadExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActionType.loadExpenses),
            mergeMap(() => this.expensesService.getExpenses().pipe(
                map((expenses: Expense[]) =>
                (
                    { type: ExpenseActionType.loadExpensesSuccess, expenses: expenses })
                ),
                catchError((error) => {
                    return of({ type: ExpenseActionType.loadExpensesFailure, error: error.statusText })
                }
                )
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
            ofType(ExpenseActionType.addExpense),
            mergeMap(({ expense }) => {
                return this.expensesService.createExpense(expense).pipe(
                    map((expense: Object) =>
                    (
                        { type: ExpenseActionType.addExpenseSuccess, expense: expense })
                    ),
                    catchError(() => of({ type: ExpenseActionType.addExpenseFailure }))
                )
            })));

    deleteExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActionType.deleteExpense),
            mergeMap(({id}) => {
                return this.expensesService.deleteExpense(id).pipe(
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