export function mockNGXLogger() {
  return jasmine.createSpyObj('NGXLogger', ['trace', 'debug', 'info', 'error']);
}

export function mockErrorService() {
  return jasmine.createSpyObj('ErrorHandlerService', ['handleError']);
}

export function mockFileImportComponent() {
  return jasmine.createSpyObj('FileImportComponent', [
    'readFile',
    'setIssueCount',
    'reset'
  ]);
}
