import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BaseComponent } from '@app/shared/components/base/base.component';
import { filter, takeUntil } from 'rxjs/operators';
import { FileStoreService } from '../services/file-store.service';

@Component({
  selector: 'vw-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileImportComponent extends BaseComponent implements OnInit {
  loading$ = this.fileStore.selectLoading$;
  records$ = this.fileStore.filteredRecords$;
  error$ = this.fileStore.selectError$;

  constructor(
    private fileStore: FileStoreService,
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public config: any
  ) {
    super();
  }

  ngOnInit(): void {
    // Handle API Errors
    this.handleError();

    // Trigger Read
    this.fileStore.readFile();
  }

  private handleError() {
    this.error$
      .pipe(
        filter(error => !!error),
        takeUntil(this.destroyed)
      )
      .subscribe(error => {
        this.snackBar.open(error, 'Error', this.config);
      });
  }
}
