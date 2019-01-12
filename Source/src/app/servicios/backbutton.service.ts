import { Injectable } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BackbuttonService {
  exitB: any;
  currentURL: any = "";
  haspressB: boolean = false;
  openModal = false;
  /*Este servicio controla el comportamiento del botón atrás en la aplicación */
  constructor(private platform: Platform,
    private navCtrl: NavController,
    private router: Router,
    private authS: AuthenticationService) {
    this.exitB = this.platform.backButton;
    this.exitB.subscribe(() => {
      window.document.querySelector('ion-app').classList.remove('cameraView');
      if (!this.openModal) {
        if (this.currentURL == "/" || this.currentURL == "" || this.currentURL == "/home" || this.currentURL == "/profesor" || this.currentURL == "/profesor/home" || this.currentURL == "/usuario" || this.currentURL == "/usuario/home")
          /*En caso de estar en la pestaña home si se pulsa atrás se cierra la aplicación*/
          navigator['app'].exitApp();
        else {
          console.log("toca la magia")
          /*En caso de que no estemos en una pestaña home, al pulsar atrás
          navegaremos a home, pero no podemos realizar aquí la navegación: ¿por qué?
          Cuando se pulsa atrás, el comportamiento por defecto es ir hacia atrás en el historial
          de navegación, pero no es una acción inmediata (observable). Por tanto, si intento
          realizar aquí la navegación será machacada por la acción por defecto de ir atrás
          en el historial. ¿Qué debo hacer? Observar el navegador y cuando haya terminado 
          de navegar hacia atrás en el historial sobreescribir la ruta con home.
          No es perfecto, pero no he encontrado otro mecanismo
          */
          //this.navCtrl.navigateRoot(['/profesor/home'], { animationDirection: "back" });
          this.haspressB = true;  //indica que se ha pulsado hacia atrás.
        }
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {  //es lanzado cuando se termina de navegar
        this.currentURL = event.url;
        if (this.haspressB) {  //Si se pulsó atrás
          if (this.authS.isLogged()) {
            if (this.authS.getRole() == "prof") {  //si soy profe me voy al home de profe
              this.navCtrl.navigateRoot(['/profesor/home'], { animationDirection: "back" });
            } else {  //si soy alumno me voy al home de alumno
              this.navCtrl.navigateRoot(['/usuario/home'], { animationDirection: "back" });
            }
          } else {  //Este no debe ser alcanzado nunca, es por si acaso
            this.navCtrl.navigateRoot(['/'], { animationDirection: "back" });
          }

          this.haspressB = !this.haspressB;  //Ya he gestionado la acción, dejo de indicar que se pulsó atrás
        }
      }
    });

  }
}
