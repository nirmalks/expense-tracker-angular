import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ExpenseCreateDialogComponent } from './expense-create-dialog/expense-create-dialog.component';
import {ExpensesService} from '../services/expenses.service';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(public dialog: MatDialog, private expensesService: ExpensesService) { }
  latestExpenses: Array<any> = [];
  displayedColumns: string[] = ['date', 'amount', 'category', 'description'];
  ngOnInit(): void {
    this.showExpenses();
  }

  addExpense() {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  showExpenses() {
    this.expensesService.getExpenses().subscribe((data: any) => {
      this.latestExpenses = data.slice(Math.max(data.length - 5, 0))
    });
  }
}
