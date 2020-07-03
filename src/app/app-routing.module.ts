import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './shared/models/app.models';

const routes: Routes = [
  {
    path: AppRoutes.FILE_IMPORT,
    loadChildren: () =>
      import('./features/file-import/file-import.module').then(
        m => m.FileImportModule
      )
  },
  {
    path: AppRoutes.DEFAULT,
    redirectTo: AppRoutes.FILE_IMPORT,
    pathMatch: 'full'
  },
  { path: AppRoutes.ANY, redirectTo: AppRoutes.FILE_IMPORT }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
