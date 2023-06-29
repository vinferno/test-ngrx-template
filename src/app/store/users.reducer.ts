import { Action, createReducer, on } from '@ngrx/store';
import { addUserAction } from './users.actions';


export const usersFeatureKey = 'users';

export interface State {
  users: any[];
}

export const initialState: State = {
  users: [],
};


export const reducer = createReducer(
  initialState,
  on(addUserAction, (state, action) => {
    return {...state, users: [...state.users, action.data]}
  })

);

