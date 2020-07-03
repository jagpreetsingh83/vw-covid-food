import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { FileImportComponent } from './components/file-import.component';
import { TableComponent } from './components/table/table.component';
import { FileImportRoutingModule } from './file-import-routing.module';
import { FileAdapterService, FileRecordAdapter } from './services/file-adapter.service';
import { FileReaderService } from './services/file-reader.service';
import { FileStoreService } from './services/file-store.service';
import * as FileStore from './store';

const COMPONENTS = [FileImportComponent, TableComponent];

const SERVICES = [
  FileReaderService,
  FileAdapterService,
  FileRecordAdapter,
  FileStoreService
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    FileImportRoutingModule,
    StoreModule.forFeature(FileStore.fileFeatureKey, FileStore.reducer),
    EffectsModule.forFeature([FileStore.FileEffects])
  ],
  providers: [...SERVICES]
})
export class FileImportModule {}
