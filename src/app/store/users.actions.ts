import { createAction, props } from '@ngrx/store';

export const addUserAction = createAction(
  '[Users] AddUser Users',
  props<{data: {id: string}}>()
);




