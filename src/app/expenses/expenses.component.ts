import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExpenseActionType } from '../actions/expense.action';
import { ExpensesState } from '../reducers/expenses';
import { AppState, selectTopExpenses } from '../selectors/expense';

import Expense from './models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  displayedColumns: string[] = ['date', 'amount', 'category', 'description'];

  latestExpenses: Observable<Expense[]> = this.store.select(selectTopExpenses);
  
  ngOnInit(): void {
    this.store.dispatch({ type: ExpenseActionType.getAllExpenses});
  }

}
