import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@app/shared/models/app.models';

import { FileImportComponent } from './components/file-import.component';

const routes: Routes = [
  { path: AppRoutes.DEFAULT, component: FileImportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileImportRoutingModule {}
