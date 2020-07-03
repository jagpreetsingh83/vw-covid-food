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

export const selectFilteredRecords = createSelector(
  selectFileState,
  (state: fromFile.FileState) =>
    !!state.issueCount || state.issueCount === 0
      ? state.records.filter(r => r.issueCount <= state.issueCount)
      : state.records
);
