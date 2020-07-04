import { Injectable } from '@angular/core';
import { FileAdapterService } from '@file/services/file-adapter.service';
import { FileReaderService } from '@file/services/file-reader.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import * as FileActions from '../actions/file.actions';

@Injectable()
export class FileEffects {
  readFile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FileActions.readFile),
      tap(() => this.logger.debug('Trying to read file')),
      switchMap(() =>
        this.reader.read().pipe(
          tap(data => this.logger.debug('Read', data.length)),
          map(data => this.adapter.getFileRecords(data)),
          delay(2000), // Intended Delay for the Spinner (demo purpose!)
          map(records =>
            FileActions.readFileSuccess({
              payload: { records }
            })
          ),
          catchError((error: Error) => {
            this.logger.error('Error while reading file', error.message);
            return of(FileActions.readFileFailure({ error: error.message }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private logger: NGXLogger,
    private reader: FileReaderService,
    private adapter: FileAdapterService
  ) {}
}
