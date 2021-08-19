import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExpenseActionType } from '../store/actions/expense.actions';
import Expense from '../store/models/expense.model';
import { AppState } from '../store/reducers';
import { expensesQuery } from '../store/selectors/expense.selector';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  displayedColumns: string[] = ['date', 'amount', 'category', 'description'];
  latestExpenses: Expense[] = [];
  expensesApiError$: Observable<string>;

  ngOnInit(): void {
    this.store.dispatch({ type: ExpenseActionType.loadExpenses });
    this.expensesApiError$ = this.store.select(expensesQuery.getError);
    const expenses$ = this.store.select(expensesQuery.getTopExpenses);
    expenses$.subscribe(data => {
      this.latestExpenses = data
    });
  }

}
