import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import Category from '../models/category';
import { AppState } from 'src/app/store/reducers';
import { addExpense, updateExpense } from 'src/app/store/actions/expense.actions';


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
  constructor(public dialogRef: MatDialogRef<ExpenseCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {
    if (this.data.element != undefined) {
      this.expenseAmount.setValue(this.data.element.amount);
      this.expenseDescription.setValue(this.data.element.description);
      this.expenseDate.setValue(this.data.element.expenseDate);
      this.expenseCategory.setValue(this.data.element.category);
      this.expenseId = this.data.element.id;
      this.cdr.detectChanges();
    }
  }

  onSubmit() {
    const expense = {
      "category": this.expenseCategory.value,
      "amount": this.expenseAmount.value,
      "description": this.expenseDescription.value,
      "expenseDate": moment(this.expenseDate.value).format("DD/MM/YYYY"),
      "id": this.expenseId
    };
    if (this.expenseId) {
      this.store.dispatch(updateExpense({ expense }));
    } else {
      this.store.dispatch(addExpense({ expense }));
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
