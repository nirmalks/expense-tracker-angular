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

    constructor(
        private actions$: Actions,
        private expensesService: ExpensesService
    ) { }
}