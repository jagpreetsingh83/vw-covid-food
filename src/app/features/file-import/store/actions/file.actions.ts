import { FileRecord } from '@file/models/file-import-models';
import { createAction, props } from '@ngrx/store';

export const readFile = createAction('[File] Load Files');

export const readFileSuccess = createAction(
  '[File] Load Files Success',
  props<{ payload: { records: FileRecord[] } }>()
);

export const readFileFailure = createAction(
  '[File] Load Files Failure',
  props<{ error: any }>()
);

export const reset = createAction('[File] Reset');
