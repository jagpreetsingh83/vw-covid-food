import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileRecord } from '@file/models/file-import-models';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { endpointUrls } from '../../../endpoints';
import { FileAdapterService } from './file-adapter.service';

@Injectable()
export class FileReaderService {
  constructor(
    private httpClient: HttpClient,
    private logger: NGXLogger,
    private adapter: FileAdapterService
  ) {}

  read(): Observable<FileRecord[]> {
    this.logger.debug('Fetching data from the server');
    return this.httpClient.get<FileRecord[]>(endpointUrls.COVID_DATA()).pipe(
      tap(response => this.logger.debug('Received from server', response)),
      map(response => this.adapter.getFileRecords(response['data']))
    );
  }
}
