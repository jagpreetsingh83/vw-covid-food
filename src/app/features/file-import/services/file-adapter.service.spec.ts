import { TestBed } from '@angular/core/testing';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';

import { FileAdapterService, FileRecordAdapter } from './file-adapter.service';

describe('FileAdapterService', () => {
  let service: FileAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileAdapterService, FileRecordAdapter]
    });
    service = TestBed.get(FileAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getFileRecords', () => {
    expect(service.getFileRecords(FILE_MOCK.CSV_RECORDS)).toEqual(
      FILE_MOCK.FILE_RECORDS
    );
  });
});
