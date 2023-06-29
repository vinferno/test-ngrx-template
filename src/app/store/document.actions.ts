import { createAction, props } from '@ngrx/store';

export const addDocumentDocuments = createAction(
  '[Document] AddDocument One Document to Documents property on Document State',
  props<{data: {id: string, user: string}}>()
);




