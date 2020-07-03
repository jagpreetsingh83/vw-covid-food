import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { FileStoreService } from '@file/services/file-store.service';
import { AppTestModule } from '@tests/app-test.module';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';
import { mockFileImportComponent } from '@tests/mocks';
import { of } from 'rxjs';

import { FileImportComponent } from './file-import.component';

describe('FileImportComponent', () => {
  let component: FileImportComponent;
  let fixture: ComponentFixture<FileImportComponent>;
  let fileStore: FileStoreService;
  let snackBar: MatSnackBar;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [FileImportComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: FileStoreService,
          useValue: mockFileImportComponent()
        },
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileImportComponent);
    component = fixture.componentInstance;
    fileStore = TestBed.get(FileStoreService);
    component.error$ = of(null);
    snackBar = TestBed.get(MatSnackBar);
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display snack bar notification on error', () => {
    const err = new Error('kboom');
    component.error$ = of(err);
    spyOn(snackBar, 'open');
    component.ngOnInit();
    expect(snackBar.open).toHaveBeenCalled();
  });

  it('should set the filter count in store when issue count in entered', fakeAsync(() => {
    component.issueCountField.setValue(12);
    fixture.detectChanges();
    tick(500);
    expect(fileStore.setIssueCount).toHaveBeenCalledWith(12);
  }));

  it('should reset the import and perform a fresh read of the file', () => {
    const event = FILE_MOCK.EVENT;
    component.issueCountField.setValue(12); // This should reset
    component.onFileChange(event);
    fixture.detectChanges();
    expect(fileStore.readFile).toHaveBeenCalledWith((event as any).target);
    expect(el.query(By.css('#file-name')).nativeElement.textContent).toContain(
      'mock.csv'
    );
    expect(component.issueCountField.value).toBe(null);
  });
});
