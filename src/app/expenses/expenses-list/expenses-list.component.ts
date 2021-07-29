import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteExpense, ExpenseActionType } from 'src/app/actions/expense.action';
import { AppState } from 'src/app/reducers';
import { selectAllExpenses, selectTopExpenses } from 'src/app/reducers/expenses';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenseCreateDialogComponent } from '../expense-create-dialog/expense-create-dialog.component';
import Expense from '../models/expense';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private expensesService: ExpensesService,
    private store: Store<AppState>) { }
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
    this.store.dispatch({ type: ExpenseActionType.getAllExpenses });
    const expenses$ = this.store.select(selectTopExpenses);
    expenses$.subscribe(data => {
      this.dataSource = data
    });
  }

  deleteExpense(element: any) {
    this.store.dispatch(deleteExpense({expenseId: element._id}));
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
