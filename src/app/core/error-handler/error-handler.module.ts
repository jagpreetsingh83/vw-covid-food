import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  imports: [SharedModule]
})
export class ErrorHandlerModule {
  static forRoot(): ModuleWithProviders<ErrorHandlerModule> {
    return {
      ngModule: ErrorHandlerModule,
      providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }]
    };
  }
}
