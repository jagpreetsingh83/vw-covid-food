import * as FileStore from '@file/store';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';

import { FileState } from '../reducers/file.reducer';

describe('File Selectors', () => {
  it('selectLoading', () => {
    const FILE_STATE = (FILE_MOCK.LOADING_FILE_STORE as any).file;
    expect(FileStore.selectLoading.projector(FILE_STATE)).toEqual(true);
  });
  it('selectError', () => {
    const FILE_STATE = (FILE_MOCK.ERROR_FILE_STORE as any).file;
    expect(FileStore.selectError.projector(FILE_STATE)).toEqual('kboom');
  });
  it('selectFilteredRecords', () => {
    const FILE_STATE = (FILE_MOCK.SUCCESS_FILE_STORE as any).file;
    expect(FileStore.selectFilteredRecords.projector(FILE_STATE)).toEqual(
      FILE_MOCK.FILE_RECORDS
    );
  });
  it('selectFilteredRecords (with Issue Count)', () => {
    const FILE_STATE: FileState = {
      ...(FILE_MOCK.SUCCESS_FILE_STORE as any).file,
      issueCount: 80
    };
    expect(
      FileStore.selectFilteredRecords.projector(FILE_STATE).length
    ).toEqual(9);
  });
});
