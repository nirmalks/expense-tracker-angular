import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromExpenses from './expenses';

export interface AppState {
  data: fromExpenses.ExpensesState
}

export const reducers: ActionReducerMap<AppState> = {
  data: fromExpenses.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
