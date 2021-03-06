import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Expense from '../store/models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:8000';
  
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.configUrl + "/expenses");
  }

  deleteExpense(id: String): Observable<Object> {
    return this.http.delete(this.configUrl + "/expenses/" + id);
  }

  createExpense(expense: Expense) {
    return this.http.post(this.configUrl + "/expenses", expense);
  }

  updateExpense(expense: Expense): Observable<Object> {
    return this.http.put(this.configUrl + "/expenses/" + expense.id, expense);
  }
}
