import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
}
