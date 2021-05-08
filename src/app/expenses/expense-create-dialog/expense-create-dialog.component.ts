import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expense-create-dialog',
  templateUrl: './expense-create-dialog.component.html',
  styleUrls: ['./expense-create-dialog.component.scss']
})
export class ExpenseCreateDialogComponent implements OnInit {
  expenseAmount = new FormControl('');
  expenseDescription = new FormControl('');
  expenseDate = new FormControl('');
  expenseCategory = new FormControl('');
  selectedValue: any = "";
  selectedCar: string = "";

  expenseCreateForm : any = "";
  constructor(private fb: FormBuilder) { 
    this.expenseCreateForm= this.fb.group({

    })
  }

  ngOnInit(): void {
 
  }

  onSubmit() {
    console.log(this.expenseAmount.value)
    console.log(this.expenseDescription.value)
    console.log(this.expenseDate.value)
    console.log(this.expenseCategory.value)
  }

  foods: Category[] = [
    {value: 'food', viewValue: 'Food'},
    {value: 'internet', viewValue: 'Internet'},
    {value: 'electronics', viewValue: 'Electronics'}
  ];
}

interface Category {
  value: string;
  viewValue: string;
}