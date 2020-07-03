import { Injectable } from '@angular/core';
import { Adapter } from '@app/shared/models/app.models';
import { AOA, FileRecord } from '@file/models/file-import-models';

@Injectable()
export class FileRecordAdapter implements Adapter<FileRecord> {
  adapt(item: any[]): FileRecord {
    return new FileRecord(item[0], item[1], item[2], item[3]);
  }
}

@Injectable()
export class FileAdapterService {
  constructor(private recordAdapter: FileRecordAdapter) {}

  private getFileRecord(data: any[]): FileRecord {
    return this.recordAdapter.adapt(data);
  }

  getFileRecords(data: AOA): FileRecord[] {
    return data.map(i => this.getFileRecord(i));
  }
}
