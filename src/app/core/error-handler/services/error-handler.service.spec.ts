import { TestBed } from '@angular/core/testing';
import { NGXLogger } from 'ngx-logger';
import { AppTestModule } from 'src/tests/app-test.module';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let logger: NGXLogger;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule]
    });
    logger = TestBed.get(NGXLogger);
    service = new ErrorHandlerService(logger);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('handleError', () => {
    const err = Error('kboom');
    service.handleError(err);
    expect(logger.error).toHaveBeenCalledWith(err);
  });
});
