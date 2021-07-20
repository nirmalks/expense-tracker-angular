import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Expense from "../expenses/models/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:8000';
  
  getExpenses() {
    return this.http.get(this.configUrl + "/expenses");
  }

  deleteExpense(id: String) {
    return this.http.delete(this.configUrl + "/expenses/" + id);
  }

  createExpense(expense: Expense) {
    return this.http.post(this.configUrl + "/expenses", expense);
  }

  updateExpense(expense: Expense) {
    return this.http.put(this.configUrl + "/expenses/" + expense.id, expense);
  }
}
