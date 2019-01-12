import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PScannerPage } from './p-scanner.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { setTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';

const routes: Routes = [
  {
    path: '',
    component: PScannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    CustomLoadingModule,
    PipesModule,
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
  declarations: [PScannerPage]
})
export class PScannerPageModule {}
