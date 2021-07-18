import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ExpenseCreateDialogComponent } from '../expense-create-dialog/expense-create-dialog.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  constructor(public dialog: MatDialog, 
    private expensesService: ExpensesService) { }
    latestExpenses: Array<any> = [];
    displayedColumns: string[] = ['date', 'amount', 'category', 'description', 'actions'];
  ngOnInit(): void {
    this.showExpenses();
  }

  addExpense() {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent);
  }

  showExpenses() {
    this.expensesService.getExpenses().subscribe((data: any) => {
      this.latestExpenses = data;
    });
  }

  deleteExpense(id: String) {
    console.log(id)
    this.expensesService.deleteExpense(id).subscribe(
      
    );
  }

}
