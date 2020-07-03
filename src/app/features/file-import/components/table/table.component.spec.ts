import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';
import { of } from 'rxjs';
import { AppTestModule } from 'src/tests/app-test.module';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [TableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should compile', () => {
    component.records = of(FILE_MOCK.FILE_RECORDS);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display no results when there are no results', () => {
    component.records = of([]);
    fixture.detectChanges();
    expect(el.query(By.css('#no-records-display'))).toBeTruthy();
  });

  it('should display loading indicator while loading', () => {
    component.isLoading = of(true);
    component.records = of([]);
    fixture.detectChanges();
    expect(el.query(By.css('mat-progress-bar'))).toBeTruthy();
  });

  it('should display results when loaded', () => {
    component.records = of(FILE_MOCK.FILE_RECORDS);
    fixture.detectChanges();
    expect(el.query(By.css('#no-records-display'))).toBeFalsy();
  });

  it('should only display records when loaded', () => {
    component.records = of(FILE_MOCK.FILE_RECORDS);
    fixture.detectChanges();
    expect(component.dataSource.data.length).toBeGreaterThan(10);
    expect(
      (el.nativeElement as HTMLElement).querySelectorAll('.mat-row').length
    ).toBeGreaterThanOrEqual(10);
  });
});
