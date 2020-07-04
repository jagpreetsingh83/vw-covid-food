import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { PipesModule } from './pipes/pipes.module';

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  MaterialModule,
  RouterModule,
  PipesModule
];

@NgModule({
  exports: [...MODULES]
})
export class SharedModule {}
