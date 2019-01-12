import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioPage } from './usuario.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { setTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { TabsRoutingModule } from './tabs-routing.module';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({  //Necesario para poder utilziar | translate
      loader: {
        provide: TranslateLoader, 
        useFactory: (setTranslateLoader), deps: [HttpClient]
      }
    }),
    TabsRoutingModule
  ],
  declarations: [UsuarioPage]
})
export class UsuarioPageModule {}
