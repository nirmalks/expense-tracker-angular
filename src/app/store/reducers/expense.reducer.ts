import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ExpenseActions from '../actions/expense.actions';
import Expense from '../models/expense.model';

export const expensesFeatureKey = 'expenses';

export interface ExpensesData extends EntityState<Expense> {
  error?: string | null,
  selectedExpenseId: string,
  loading: boolean
}

export const adapter: EntityAdapter<Expense> = createEntityAdapter<Expense>();

export const initialState: ExpensesData = adapter.getInitialState({
  error: '',
  loading: false,
  selectedExpenseId: ''
});

export const reducer = createReducer(
  initialState,
  on(ExpenseActions.addExpense,
    (state, action) => adapter.addOne(action.expense, state)
  ),
  on(ExpenseActions.upsertExpense,
    (state, action) => adapter.upsertOne(action.expense, state)
  ),
  on(ExpenseActions.addExpenses,
    (state, action) => adapter.addMany(action.expenses, state)
  ),
  on(ExpenseActions.upsertExpenses,
    (state, action) => adapter.upsertMany(action.expenses, state)
  ),
  on(ExpenseActions.updateExpenseSuccess,
    (state, action) => adapter.updateOne(action.expense, state)
  ),
  on(ExpenseActions.updateExpenses,
    (state, action) => adapter.updateMany(action.expenses, state)
  ),
  on(ExpenseActions.deleteExpense,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ExpenseActions.deleteExpenses,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ExpenseActions.loadExpensesSuccess,
    (state, action) => adapter.setAll(action.expenses, state)
  ),
  on(ExpenseActions.loadExpensesFailure,
    (state, {error} ) => {
      return ({...state, error: error})
    } 
  ),
  on(ExpenseActions.clearExpenses,
    state => adapter.removeAll(state)
  ),
);

export const getSelectedExpenseId = (state: ExpensesData) => state.selectedExpenseId;

export const getError = (state: ExpensesData) => {
  return state.error;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();




