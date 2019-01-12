import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/*Importamos módulo para almacenamiento local*/
import { IonicStorageModule } from '@ionic/storage';
/* Importamos el servicio para gestionar la autenticación */
import { AuthenticationService } from '../app/servicios/authentication.service';
/*Importamos los módulos y funciones necesarias para la traducción */
import { TranslateModule, TranslateLoader,TranslatePipe } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ThemeSwitcherService } from './servicios/theme-switcher.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { CloudService } from './servicios/cloud.service';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';
import { CustomLoadingModule } from './customModules/custom-loading/custom-loading.module';
import { CustomToastModule } from './customModules/custom-toast/custom-toast.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SolicitudComponent } from './customComponent/solicitud/solicitud.component';
import { EditUserComponent } from './customComponent/edit-user/edit-user.component';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BackbuttonService } from './servicios/backbutton.service';
import { TripsUserComponent } from './customComponent/trips-user/trips-user.component';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NetworkService } from './servicios/network.service';
import { Network } from '@ionic-native/network/ngx';
export function setTranslateLoader(http: any) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent, SolicitudComponent, EditUserComponent, TripsUserComponent],
  entryComponents: [SolicitudComponent,EditUserComponent, TripsUserComponent],
  imports: [
    CustomLoadingModule,
    CustomToastModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule, TranslateModule.forRoot({  //Módulo de traducción
      loader: {
        provide: TranslateLoader, 
        useFactory: (setTranslateLoader), 
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticationService,  //Servicio de autenticación
    ThemeSwitcherService,  //Servicio de cambio de tema
    Keyboard,   //Control del teclado:nativo
    Camera, //Control de la camara:nativo
    CloudService, //Servicio de gestión de la base de datos
    QRScanner,  //Servicio de scanner de QR:nativo
    Dialogs,  //Servicio de diálogos(alert, beep, confirm...):nativo
    Vibration,  //Control de la vibración:nativo
    BackbuttonService,  //Servicio de control de de las acciones al pulsar atrás
    Screenshot,  //Servicio de captura de pantalla:nativo
    SocialSharing,  //Servicio de redes sociales:nativo
    Network,  //Servicio de conexiones de red:nativo
    NetworkService  //Servicio para notificar si estamos sin red y ejecutar las tareas adecuadas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
