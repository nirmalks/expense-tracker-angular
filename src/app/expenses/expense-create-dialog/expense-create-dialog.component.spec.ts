import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ExpenseCreateDialogComponent } from './expense-create-dialog.component';

describe('ExpenseCreateDialogComponent', () => {
  let component: ExpenseCreateDialogComponent;
  let fixture: ComponentFixture<ExpenseCreateDialogComponent>;
  let store: MockStore;
  const initialState = { loggedIn: false };
  let loader: HarnessLoader;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatTableModule, MatIconModule, ],
      providers: [
          MatDialog,
          MAT_DIALOG_DATA,
          provideMockStore({ initialState })]
      ,
      declarations: [ ExpenseCreateDialogComponent ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture = TestBed.createComponent(ExpenseCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
