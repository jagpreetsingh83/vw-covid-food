import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BaseComponent } from '@app/shared/components/base/base.component';
import { NGXLogger } from 'ngx-logger';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  takeUntil,
  tap
} from 'rxjs/operators';
import { FileStoreService } from '../services/file-store.service';

@Component({
  selector: 'vw-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileImportComponent extends BaseComponent implements OnInit {
  issueCountField = new FormControl();

  loading$ = this.fileStore.selectLoading$;
  records$ = this.fileStore.filteredRecords$;
  error$ = this.fileStore.selectError$;

  fileName: string;

  constructor(
    private fileStore: FileStoreService,
    private logger: NGXLogger,
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public config: any
  ) {
    super();
  }

  ngOnInit(): void {
    this.handleIssueCountChange();
    this.handleError();
    this.onFileChange();
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

  private handleIssueCountChange() {
    this.issueCountField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(input =>
          this.logger.debug('Applying filter on Issue Count', input)
        ),
        takeUntil(this.destroyed)
      )
      .subscribe(input => this.fileStore.setIssueCount(input));
  }

  onFileChange() {
    this.logger.debug('Resetting...');
    this.resetSelection();
    this.fileStore.readFile();
  }

  private resetSelection() {
    this.fileName = null;
    this.issueCountField.reset();
    this.fileStore.reset();
  }
}
