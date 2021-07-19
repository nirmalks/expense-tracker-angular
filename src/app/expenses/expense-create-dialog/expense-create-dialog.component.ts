import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { ExpensesService } from 'src/app/services/expenses.service';
import Category from '../models/category';


@Component({
  selector: 'app-expense-create-dialog',
  templateUrl: './expense-create-dialog.component.html',
  styleUrls: ['./expense-create-dialog.component.scss']
})
export class ExpenseCreateDialogComponent implements OnInit {
  expenseAmount = new FormControl('');
  expenseDescription = new FormControl('');
  expenseDate = new FormControl(moment());
  expenseCategory = new FormControl('');
  selectedValue: any = "";
  selectedCar: string = "";
  
  expenseCreateForm : any = "";
  constructor(private fb: FormBuilder, private expensesService: ExpensesService,
    public dialogRef: MatDialogRef<ExpenseCreateDialogComponent>) { 
    this.expenseCreateForm= this.fb.group({

    })
  }

  ngOnInit(): void {
 
  }

  onSubmit() {
    const expense = {
      "category": this.expenseCategory.value,
      "amount": this.expenseAmount.value,
      "description": this.expenseDescription.value,
      "date": this.expenseDate.value.format("DD/MM/YYYY")
    };
    this.expensesService.createExpense(expense).subscribe();
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
