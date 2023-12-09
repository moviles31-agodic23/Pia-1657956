import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPlayPage } from './crear-play.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPlayPageRoutingModule {}
