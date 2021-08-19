import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ExpenseCreateDialogComponent } from '../expense-create-dialog/expense-create-dialog.component';
import { AppState } from 'src/app/store/reducers';
import { deleteExpense, ExpenseActionType } from 'src/app/store/actions/expense.actions';
import { expensesQuery } from 'src/app/store/selectors/expense.selector';
import Expense  from 'src/app/store/models/expense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  constructor(public dialog: MatDialog, private store: Store<AppState>) { }
  dataSource: Expense[] = [];
  displayedColumns: string[] = ['date', 'amount', 'category', 'description', 'actions'];

  ngOnInit(): void {
    this.showExpenses();
  }

  addExpense() {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.showExpenses();
      }
    })
  }

  showExpenses() {
    this.store.dispatch({ type: ExpenseActionType.loadExpenses });
    const expenses$ = this.store.select(expensesQuery.getTopExpenses);
    expenses$.subscribe(data => {
      this.dataSource = data
    });
  }

  deleteExpense(element: Expense) {
    this.store.dispatch(deleteExpense({id: element.id}));
    this.dataSource = this.dataSource.filter((item: any) => item !== element);
  }

  updateExpense(element: Expense) {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent, {
      data: { element }
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.showExpenses();
      }
    })
  }

}
