import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPlayPageRoutingModule } from './crear-play-routing.module';

import { CrearPlayPage } from './crear-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPlayPageRoutingModule
  ],
  declarations: [CrearPlayPage]
})
export class CrearPlayPageModule {}
