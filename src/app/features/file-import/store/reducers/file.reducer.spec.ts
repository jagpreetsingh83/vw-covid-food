import * as FileStore from '@file/store';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';

import { initialState, reducer } from './file.reducer';

describe('File Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  it('readFile', () => {
    const file = (FILE_MOCK.EVENT as unknown) as DataTransfer;
    const action = FileStore.readFile({
      payload: { file }
    });
    const result = reducer(initialState, action);
    expect(result.records).toEqual([]);
    expect(result.success).toBe(false);
    expect(result.error).toBe(null);
    expect(result.loading).toBe(true);
  });

  it('readFileSuccess', () => {
    const action = FileStore.readFileSuccess({
      payload: { records: FILE_MOCK.FILE_RECORDS }
    });
    const result = reducer(initialState, action);
    expect(result.records).toEqual(FILE_MOCK.FILE_RECORDS);
    expect(result.success).toBe(true);
    expect(result.error).toBe(null);
    expect(result.loading).toBe(false);
  });

  it('readFileFailure', () => {
    const err = new Error('kboom');
    const action = FileStore.readFileFailure({
      error: err.message
    });
    const result = reducer(initialState, action);
    expect(result.records).toEqual([]);
    expect(result.success).toBe(false);
    expect(result.error).toBe('kboom');
    expect(result.loading).toBe(false);
  });

  it('setIssueCount', () => {
    const action = FileStore.setIssueCount({
      payload: { issueCount: 12 }
    });
    const result = reducer(initialState, action);
    expect(result.issueCount).toEqual(12);
  });

  it('reset', () => {
    const action = FileStore.reset();
    const result = reducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
