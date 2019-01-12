import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ProfesorPage } from './profesor.page';
import {TabsRoutingModule} from "../profesor/tabs-routing.module"
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { setTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader, 
        useFactory: (setTranslateLoader), deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule
  ],
  declarations: [ProfesorPage]
})
export class ProfesorPageModule {}
