import { Injectable } from '@angular/core';
import { Adapter } from '@app/shared/models/app.models';
import { AOA, FileRecord } from '@file/models/file-import-models';

@Injectable()
export class FileRecordAdapter implements Adapter<FileRecord> {
  adapt(item: any[]): FileRecord {
    return new FileRecord(
      item[9],
      item[10],
      item[11],
      item[12],
      item[13],
      item[14],
      item[15],
      item[16],
      item[17],
      item[18]
    );
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
