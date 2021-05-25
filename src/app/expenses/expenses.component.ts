import { Component, OnInit } from '@angular/core';


import {ExpensesService} from '../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private expensesService: ExpensesService) { }
  latestExpenses: Array<any> = [];
  displayedColumns: string[] = ['date', 'amount', 'category', 'description'];
  ngOnInit(): void {
    this.showExpenses();
  }

  showExpenses() {
    this.expensesService.getExpenses().subscribe((data: any) => {
      this.latestExpenses = data.slice(Math.max(data.length - 5, 0))
    });
  }
}
