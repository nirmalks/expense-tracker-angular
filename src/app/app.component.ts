import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';

import { ExpenseCreateDialogComponent } from './expenses/expense-create-dialog/expense-create-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expense-tracker';
  constructor(public dialog: MatDialog) { }
  addExpense() {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
