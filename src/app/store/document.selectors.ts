import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as documentState from './document.reducer';

const documentStateSelector = createFeatureSelector<documentState.State>(documentState.documentFeatureKey);

export const allDocumentsSelector = createSelector(
  documentStateSelector,
  (state) => state.documents
)
