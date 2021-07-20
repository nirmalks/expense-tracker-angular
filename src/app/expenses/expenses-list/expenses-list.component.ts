import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenseCreateDialogComponent } from '../expense-create-dialog/expense-create-dialog.component';
import Expense from '../models/expense';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  constructor(public dialog: MatDialog, private expensesService: ExpensesService) { }
  latestExpenses: Expense[] = [];
  dataSource = this.latestExpenses;
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
    this.expensesService.getExpenses().subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  deleteExpense(element: any) {
    this.expensesService.deleteExpense(element._id).subscribe(
        _data => {
          this.dataSource = this.dataSource.filter((item: any) => item !== element);
        }
    );
  }

  updateExpense(element: Expense) {
    // this.expensesService.deleteExpense(element._id).subscribe(
    //     _data => {
    //       this.dataSource = this.dataSource.filter((item: any) => item !== element);
    //     }
    // );
    console.log(element);
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
