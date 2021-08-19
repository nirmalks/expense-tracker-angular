import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HarnessLoader} from '@angular/cdk/testing';
import { ExpensesListComponent } from './expenses-list.component';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import Expense from 'src/app/store/models/expense.model';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

describe('ExpensesListComponent', () => {
  let component: ExpensesListComponent;
  let fixture: ComponentFixture<ExpensesListComponent>;
  let store: MockStore;
  const initialState = { loggedIn: false };
  let loader: HarnessLoader;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatTableModule, MatIconModule],
      providers: [
          MatDialog,
          provideMockStore({ initialState })]
      ,
      declarations: [ ExpensesListComponent ]
    })
    .compileComponents();
  
    const expense: Expense = {
      "category": "some",
      "amount": "100",
      "description": "desc",
      "expenseDate": "04/03/1025",
      "id": "id"
    };
    component.dataSource = [
      expense
    ];
    fixture = TestBed.createComponent(ExpensesListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
