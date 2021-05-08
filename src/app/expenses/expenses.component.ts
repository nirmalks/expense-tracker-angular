import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ExpenseCreateDialogComponent } from './expense-create-dialog/expense-create-dialog.component';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addExpense() {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
