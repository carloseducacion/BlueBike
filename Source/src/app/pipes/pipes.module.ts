import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalizePipe} from './capitalize.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    CapitalizePipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CapitalizePipe,
    SafePipe
  ]
})
/* Es un módulo que nos permite importar nuestros pipes personales en nuestras páginas.
Es decir, desde la página se importa este módulo y ya tenemos disponibles nuesras pipes */
export class PipesModule { }
