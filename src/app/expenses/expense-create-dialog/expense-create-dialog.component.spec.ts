import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCreateDialogComponent } from './expense-create-dialog.component';

describe('ExpenseCreateDialogComponent', () => {
  let component: ExpenseCreateDialogComponent;
  let fixture: ComponentFixture<ExpenseCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
