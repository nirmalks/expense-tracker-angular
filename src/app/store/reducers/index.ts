import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromExpenses from '../reducers/expense.reducer';

export interface AppState {
  data: fromExpenses.ExpensesData
}

export const reducers: ActionReducerMap<AppState> = {
  data: fromExpenses.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
