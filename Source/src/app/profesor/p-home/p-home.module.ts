import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PHomePage } from './p-home.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { setTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import {PipesModule} from "../../pipes/pipes.module";
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CustomModalModule } from 'src/app/customModules/custom-modal/custom-modal.module';

const routes: Routes = [
  {
    path: '',
    component: PHomePage
  }
];

@NgModule({
  imports: [
    CustomLoadingModule,
    CustomModalModule,
    PipesModule,
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
  declarations: [PHomePage]
})
export class PHomePageModule {}
