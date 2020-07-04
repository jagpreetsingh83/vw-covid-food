import { NgModule } from '@angular/core';
import { SafePipe } from './safe/safe.pipe';

const PIPES = [SafePipe];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class PipesModule {}
