import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthenticationService } from '../app/servicios/authentication.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ThemeSwitcherService } from './servicios/theme-switcher.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CloudService } from './servicios/cloud.service';
import { CustomToastModule } from './customModules/custom-toast/custom-toast.module';
import { DomSanitizer } from '@angular/platform-browser';
import { BackbuttonService } from './servicios/backbutton.service';
import { NetworkService } from './servicios/network.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  logged: Boolean;
  role: String;
  exitB: any;
  currentURL: any;
  avatar;
  langmenu: any;
  skinmenu: any;
  modalOpened: any = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authS: AuthenticationService,
    private router: Router,
    private translate: TranslateService,
    private themeS: ThemeSwitcherService,
    private navCtrl: NavController,
    private camera: Camera,
    private cloud: CloudService,
    private toast: CustomToastModule,
    private sanitizer: DomSanitizer,
    private back: BackbuttonService,
    private network: NetworkService
  ) {
    this.logged = false;
    this.role = "user";
    this.currentURL = "";
    this.initializeApp();
    this.skinmenu = (environment.defaultSkin == "light" ? false : true);
    this.langmenu = (environment.defaultLanguage == "es" ? false : true);
  }

  initializeApp() {
    this.platform.ready().then(() => {

      /*Gestionamos el idioma del sistema: en función del lenguaje por defecto o
      el idioma del navegador si está disponible.
      */
      this.translate.addLangs(environment.currentLanguages);  //add all languages
      this.translate.setDefaultLang(environment.defaultLanguage); //use default language
      if (this.translate.getBrowserLang) {  //if browsers's language is avalaible is set up as default
        if (environment.currentLanguages.includes(this.translate.getBrowserLang())) {
          this.translate.use(this.translate.getBrowserLang());
        }
      }
      //Cargamos el estilo por defecto
      this.themeS.setTheme(environment.defaultSkin);

      //Checking if is logged
      this.authS.initChecking().then(() => {
        //Logging checking done
        this.logged = this.authS.isLogged();
        this.role = this.authS.getRole();

        let url;
        if (this.logged) {
          if (this.role == "prof") {
            url = "profesor";
          } else {
            url = "usuario";
          }
          //Cargamos las preferencias del usuario
          this.translate.use(this.authS.getLang());
          this.themeS.setTheme(this.authS.getSkin());
        } else {
          //Si no está logueado vamos a pantalla de login(home)
          url = "home"
        }

        this.router.navigate([url]).then(() => {
          this.statusBar.styleDefault();
          setTimeout(() => {
            this.skinmenu = (this.authS.getSkin() == "light" ? false : true);
            this.langmenu = (this.authS.getLang() == "es" ? false : true);
            /*Aquí los activo*/ /*porque no me reconocen las directivas*/
            if (this.authS.isLogged()) {
              this.cloud.getPic(this.authS.getId()).then((d) => {
                this.authS.avatar = d;
                this.splashScreen.hide();
              });
            } else {
              this.splashScreen.hide();  //evita en dispositivos lento que apareza por
            }
          }, 500);
        }).catch(err => {
          //this.presentToastWithOptions(err);
        });
      }).catch(err => {
        console.log(err);
        this.toast.show(err);
      });
    });
  }
  isLogged() {
    return this.authS.isLogged();
  }
  logOut() {
    //this.presentLoading();
    this.authS.logOut().then(d => {
      //this.loadingController.dismiss();
      this.router.navigate(["home"]);
    }).catch(err => {
      //this.loadingController.dismiss();
      console.log("Error logging out")
    });
  }





  changeLang(e) {
    //console.log(e.detail.checked);
    if (e.detail.checked) {
      this.authS.setLang("en");
      this.translate.use("en");
    } else {
      this.authS.setLang("es");
      this.translate.use("es");
    }
  }
  changeSkin(e) {
    if (e.detail.checked) {
      this.authS.setSkin("dark");
      this.themeS.setTheme("dark");
    } else {
      this.authS.setSkin("light");
      this.themeS.setTheme("light");
    }
  }
  updatePic() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,  /*FILE_URI */
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 0,
      correctOrientation: true,
      /* allowEdit:true,*/
      saveToPhotoAlbum: true,
      /*sourceType:0 es library, 1 camera, 2 saved */
      /* targetHeight:200,*/
      targetWidth: 200
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64, ' + imageData;
      this.authS.avatar = base64Image;
      this.cloud.updateField(this.authS.getId(), { "nombre": this.authS.getId(), "role": this.authS.getRole(), "avatar": this.authS.avatar }).then(() => {
        this.toast.show(this.translate.instant("imgUpdated"));
      });
    }, (err) => {
      // Handle error
    });
  }
  getImagen(img) {
    if (img != environment.defaultAvatar)
      return this.sanitizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }
}
