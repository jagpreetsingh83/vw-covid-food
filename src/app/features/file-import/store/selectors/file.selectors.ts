import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFile from '../reducers/file.reducer';

export const selectFileState = createFeatureSelector<fromFile.FileState>(
  fromFile.fileFeatureKey
);

export const selectLoading = createSelector(
  selectFileState,
  (state: fromFile.FileState) => state.loading
);

export const selectError = createSelector(
  selectFileState,
  (state: fromFile.FileState) => state.error
);

export const selectRecords = createSelector(
  selectFileState,
  (state: fromFile.FileState) => state.records
);
