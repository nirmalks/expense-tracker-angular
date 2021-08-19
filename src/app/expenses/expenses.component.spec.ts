import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import Expense from '../store/models/expense.model';
import { ExpensesComponent } from './expenses.component';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;
  let store: MockStore;
  const initialState = { error: '' };
    
  const expense: Expense = {
    "category": "some",
    "amount": "100",
    "description": "desc",
    "expenseDate": "04/03/1025",
    "id": "id"
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    component.latestExpenses = [expense];
    store = TestBed.inject(MockStore);
   
    fixture.detectChanges();
  });

 
  it('should create', () => {
    store.setState({ error: '' });
    expect(component).toBeTruthy();
  });
});
