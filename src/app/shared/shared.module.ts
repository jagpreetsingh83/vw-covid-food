import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  MaterialModule,
  RouterModule
];

@NgModule({
  exports: [...MODULES]
})
export class SharedModule {}
