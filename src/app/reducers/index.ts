import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromExpenses from './expenses';

export interface State {
  expenses: fromExpenses.ExpensesState
}

export const reducers: ActionReducerMap<State> = {
  expenses: fromExpenses.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
