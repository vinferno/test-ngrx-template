import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as usersState from './users.reducer';
import * as documentState from './document.reducer';


export interface AppState {
  [usersState.usersFeatureKey]: usersState.State,
  [documentState.documentFeatureKey]: documentState.State
}

export const reducers: ActionReducerMap<AppState> = {
  [usersState.usersFeatureKey]: usersState.reducer,
  [documentState.documentFeatureKey]: documentState.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
