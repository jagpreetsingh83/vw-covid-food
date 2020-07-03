import { Injectable } from '@angular/core';
import * as FileStore from '@file/store';
import { Store } from '@ngrx/store';

@Injectable()
export class FileStoreService {
  selectLoading$ = this.store.select(FileStore.selectLoading);
  filteredRecords$ = this.store.select(FileStore.selectFilteredRecords);
  selectError$ = this.store.select(FileStore.selectError);

  constructor(private store: Store<FileStore.FileState>) {}

  readFile(file: DataTransfer) {
    this.store.dispatch(FileStore.readFile({ payload: { file } }));
  }

  setIssueCount(issueCount: number) {
    this.store.dispatch(FileStore.setIssueCount({ payload: { issueCount } }));
  }

  reset() {
    this.store.dispatch(FileStore.reset());
  }
}
