import { Injectable } from '@angular/core';
import { AOA } from '@file/models/file-import-models';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable()
export class FileReaderService {
  read(target: DataTransfer): Observable<AOA> {
    const records$ = new Subject<AOA>();

    records$.next([[1],[2]]);

    // if (target.files.length !== 1) {
    //   records$.error(Error('Cannot use multiple files'));
    // }
    // const reader: FileReader = new FileReader();
    // reader.onload = (e: any) => {
    //   /* read workbook */
    //   const bstr: string = e.target.result;
    //   const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    //   /* grab first sheet */
    //   const wsname: string = wb.SheetNames[0];
    //   const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    //   /* read data */
    //   const recs: AOA = XLSX.utils.sheet_to_json(ws, { header: 1 });

    //   // remove header row
    //   recs.shift();

    //   records$.next(recs);
    //   records$.complete();
    // };
    // reader.readAsBinaryString(target.files[0]);

    return records$.asObservable();
  }
}
