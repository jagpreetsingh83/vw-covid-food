import { TestBed } from '@angular/core/testing';
import * as FileStore from '@file/store';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';
import { first } from 'rxjs/operators';

import { FileStoreService } from './file-store.service';

describe('FileStoreService', () => {
  let store: MockStore<any>;
  let service: FileStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FileStoreService,
        provideMockStore({ initialState: FILE_MOCK.INITIAL_FILE_STORE })
      ]
    });
    service = TestBed.get(FileStoreService);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Selectors', () => {
    it('selectLoading$', done => {
      store.setState(FILE_MOCK.LOADING_FILE_STORE);
      service.selectLoading$.pipe(first()).subscribe(isLoading => {
        expect(isLoading).toBe(true);
        done();
      });
    });
    it('filteredRecords$', done => {
      store.setState(FILE_MOCK.SUCCESS_FILE_STORE);
      service.filteredRecords$.pipe(first()).subscribe(records => {
        expect(records).toBe(FILE_MOCK.FILE_RECORDS);
        done();
      });
    });
    it('selectError$', done => {
      store.setState(FILE_MOCK.ERROR_FILE_STORE);
      service.selectError$.pipe(first()).subscribe(message => {
        expect(message).toBe('kboom');
        done();
      });
    });
  });

  it('readFile', () => {
    const file = (FILE_MOCK.EVENT.target as unknown) as DataTransfer;
    service.readFile(file);
    expect(store.dispatch).toHaveBeenCalledWith(
      FileStore.readFile({
        payload: { file }
      })
    );
  });

  it('setIssueCount', () => {
    service.setIssueCount(12);
    expect(store.dispatch).toHaveBeenCalledWith(
      FileStore.setIssueCount({
        payload: { issueCount: 12 }
      })
    );
  });

  it('reset', () => {
    service.reset();
    expect(store.dispatch).toHaveBeenCalledWith(FileStore.reset());
  });
});
