import { Action, createReducer, on } from '@ngrx/store';
import { addDocumentDocuments } from './document.actions';


export const documentFeatureKey = 'document';

export interface State {
  documents: any[];

}

export const initialState: State = {
  documents: [],
};


export const reducer = createReducer(
  initialState,
  on(addDocumentDocuments, (state, action) => {
    return {...state, documents: [...state.documents, action.data]}
  })

);

