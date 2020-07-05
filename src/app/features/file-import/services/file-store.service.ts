import { Injectable } from '@angular/core';
import * as FileStore from '@file/store';
import { Store } from '@ngrx/store';

@Injectable()
export class FileStoreService {
  selectLoading$ = this.store.select(FileStore.selectLoading);
  records$ = this.store.select(FileStore.selectRecords);
  selectError$ = this.store.select(FileStore.selectError);

  constructor(private store: Store<FileStore.FileState>) {}

  readFile() {
    this.store.dispatch(FileStore.readFile());
  }
}
