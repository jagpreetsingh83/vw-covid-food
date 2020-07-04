import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BaseComponent } from '@app/shared/components/base/base.component';
import { FileRecord } from '@file/models/file-import-models';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'vw-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent extends BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Pagination
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  showFirstLastButtons = true;

  @Input() records: Observable<FileRecord[]>;
  @Input() isLoading: Observable<boolean>;

  dataSource: MatTableDataSource<FileRecord>;
  displayedColumns = [
    'district',
    'sfcode',
    'bldgcode',
    'schoolname',
    'siteaddress',
    'zip',
    'accessibility',
    'longitude',
    'latitude',
    'koshermealtype',
    'star'
  ];

  noResults: boolean;

  constructor(private logger: NGXLogger, public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.records.pipe(takeUntil(this.destroyed)).subscribe(records => {
      this.logger.debug('Creating table with records', records);
      this.dataSource = new MatTableDataSource<FileRecord>(records);
      this.noResults = records.length <= 0;
      if (!this.noResults) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  openDialog(data: FileRecord) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
