import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExpenseActionType } from '../actions/expense.action';
import { AppState } from '../reducers';
import { selectTopExpenses } from '../reducers/expenses';

import Expense from './models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  displayedColumns: string[] = ['date', 'amount', 'category', 'description'];
  latestExpenses: Expense[] = [];

  ngOnInit(): void {
    this.store.dispatch({ type: ExpenseActionType.getAllExpenses});
    const expenses$ = this.store.select(selectTopExpenses);
    expenses$.subscribe(data => this.latestExpenses = data);
    console.log(this.latestExpenses)
  }

}
