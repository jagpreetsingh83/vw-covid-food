import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private logger: NGXLogger) {}

  handleError(error: Error | HttpErrorResponse) {
    // QUICK NOTE
    /**
     * Since error handling is essential, it gets loaded first.
     * Because of this, we cant use dependency injection in the constructor for the services.
     * Instead, we have to inject them manually with Injector.
     *
     * e.g.
     * private injector: Injector
     * const routeService = this.injector.get(RouterService);
     */

    if (error instanceof HttpErrorResponse) {
      // Server Error (error.status === 401, 403...500,...etc.) OR No Internet
      /**
       * Hide the spinner (if any - by the API request)
       * e.g. storeService.hideSpinner();
       * Navigate the user to the error page
       */
    } else {
      // Client Error (Angular Error, ReferenceError...)
      /**
       * Display a toast to highlight the error to the dev (during development only)
       * I have found this very useful personally!
       */

      // Show Toast
      if (!environment.production) {
        /**
         * errorHelper.showError(message);
         */
      }
    }

    // Report the error to server anyway!
    /**
     * errorHelper.reportError(error, message, stackTrace);
     */

    // For Now!
    this.logger.error(error);
  }
}
