import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ExpensesService } from 'src/app/services/expenses.service';
import Category from '../models/category';


@Component({
  selector: 'app-expense-create-dialog',
  templateUrl: './expense-create-dialog.component.html',
  styleUrls: ['./expense-create-dialog.component.scss']
})
export class ExpenseCreateDialogComponent implements OnInit, AfterViewInit {
  expenseAmount = new FormControl('');
  expenseDescription = new FormControl('');
  expenseDate = new FormControl(moment());
  expenseCategory = new FormControl('');
  selectedValue: any = "";
  selectedCar: string = "";
  expenseId: string = "";

  expenseCreateForm : any = "";
  constructor(private expensesService: ExpensesService,
    public dialogRef: MatDialogRef<ExpenseCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private cdr: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {
    if (this.data.element != undefined) {
      this.expenseAmount.setValue(this.data.element.amount);
      this.expenseDescription.setValue(this.data.element.description);
      this.expenseDate.setValue(this.data.element.expenseDate);
      this.expenseCategory.setValue(this.data.element.category);
      this.expenseId = this.data.element._id;
      this.cdr.detectChanges();
    }
  }

  onSubmit() {
    const expense = {
      "category": this.expenseCategory.value,
      "amount": this.expenseAmount.value,
      "description": this.expenseDescription.value,
      "expenseDate": moment(this.expenseDate.value).format("DD/MM/YYYY"),
      "_id": this.expenseId
    };
    if (this.expenseId) {
      this.expensesService.updateExpense(expense).subscribe()
    } else {
      this.expensesService.createExpense(expense).subscribe();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  categories: Category[] = [
    {value: 'food', viewValue: 'Food'},
    {value: 'internet', viewValue: 'Internet'},
    {value: 'electronics', viewValue: 'Electronics'}
  ];
}
