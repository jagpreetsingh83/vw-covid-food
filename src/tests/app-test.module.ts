import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorHandlerService } from '@core/error-handler/services/error-handler.service';
import { MaterialModule } from '@shared/material/material.module';
import { NGXLogger } from 'ngx-logger';

import { mockErrorService, mockNGXLogger } from './mocks';

const modules = [
  MaterialModule,
  RouterTestingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [
    { provide: NGXLogger, useValue: mockNGXLogger() },
    { provide: ErrorHandlerService, useValue: mockErrorService() }
  ]
})
export class AppTestModule {}
