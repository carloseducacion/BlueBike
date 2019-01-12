import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UHomePage } from './u-home.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { setTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { CustomModalModule } from 'src/app/customModules/custom-modal/custom-modal.module';

const routes: Routes = [
  {
    path: '',
    component: UHomePage
  }
];

@NgModule({
  imports: [
    CustomModalModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader, 
        useFactory: (setTranslateLoader), deps: [HttpClient]
      }
    })
  ],
  declarations: [UHomePage]
})
export class UHomePageModule {}
