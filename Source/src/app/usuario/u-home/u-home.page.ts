import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/servicios/cloud.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CustomModalModule } from 'src/app/customModules/custom-modal/custom-modal.module';
import { TripsUserComponent } from 'src/app/customComponent/trips-user/trips-user.component';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'
import { CustomToastModule } from 'src/app/customModules/custom-toast/custom-toast.module';
import { AlertController } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-u-home',
  templateUrl: './u-home.page.html',
  styleUrls: ['./u-home.page.scss'],
})
export class UHomePage implements OnInit {
  /*Campos a mostrar en la interfaz*/
  viajestotales = 0;  //viajes totales del usuario
  CO2 = 0;  //CO2 que no se emitido
  iduser = 0; //id del usuario para realizar solicitudes (de viajes, de peticiones...)
  puntos = 0;  //puntos disponibles
  puntostotales = 0;  //puntos totales
  viajes = []  //listado de los viajes realizados
  solicitudpasada = null;  //¿existe una solicitud aprobada?
  solicitudactiva = null;  //¿existe una solicitud en trámite?

  premios = environment.premios; //Carga los premios para mostrarlos por pantalla
  canInstagram;  //Muestra la posibilidad de publicar en las redes sociales
  canFacebook;
  canTwitter;
  canWhatsapp;

  constructor(private cloud: CloudService, private translate: TranslateService,
    private authS: AuthenticationService, private loading: CustomLoadingModule,
    private modal: CustomModalModule,
    private sanitizer: DomSanitizer,
    private screenshot: Screenshot,
    private socialSharing: SocialSharing,
    private toast: CustomToastModule,
    private alertController: AlertController,
    private dialog: Dialogs) {

  }

  ngOnInit() {
    this.loading.show("");
    /*Por algún motivo en ocasiones no se cargaba bien la información, 
    retrasamos en una décima de segundo para asegurarnos la carga*/
    setTimeout(() => { 
      this.socialSharing.canShareVia("instagram").then((d) => {
        this.canInstagram = true;
      }).catch((d) => {
        console.log(d);
        this.canInstagram = false;
      });
      this.socialSharing.canShareVia("whatsapp").then((d) => {
        this.canWhatsapp = true;
      }).catch(() => {
        this.canWhatsapp = false;
      })
      this.socialSharing.canShareVia("facebook").then((d) => {
        this.canFacebook = true;
      }).catch(() => {
        this.canFacebook = false;
      })
      this.socialSharing.canShareVia("twitter").then((d) => {
        this.canTwitter = true;
      }).catch(() => {
        this.canTwitter = false;
      })
      this.userdata().then(() => {   
        this.loading.hide();
      })
    }, 100);
  }
  share(social?) {
    this.screenshot.URI(80).then((d) => {
      console.log(d)
      if (!social || social == "instagram") {
        this.socialSharing.shareViaInstagram("ok", d.URI).then((x) => {
          this.toast.show(this.translate.instant("shared"));
        }).catch(() => {
          this.toast.show(this.translate.instant("errorsharing"));
        })
      } else if (social == "twitter") {
        this.socialSharing.shareViaTwitter("ok", d.URI).then((x) => {
          this.toast.show(this.translate.instant("shared"));
        }).catch(() => {
          this.toast.show(this.translate.instant("errorsharing"));
        })
      } else if (social == "whatsapp") {
        this.socialSharing.shareViaWhatsApp("ok", d.URI).then((x) => {
          this.toast.show(this.translate.instant("shared"));
        }).catch(() => {
          this.toast.show(this.translate.instant("errorsharing"));
        })
      } else if (social == "facebook") {
        this.socialSharing.shareViaFacebook("ok", d.URI).then((x) => {
          this.toast.show(this.translate.instant("shared"));
        }).catch(() => {
          this.toast.show(this.translate.instant("errorsharing"));
        })
      }
    });
  }
  ionViewDidEnter() {
    
  }
  viewTrips() {
    let item = {
      nombre: this.authS.getId(),
      puntos: this.puntos,
      total: this.puntostotales,
      totalviajes: this.viajestotales,
      viajes: this.viajes,
      avatar: this.authS.avatar
    }
    this.modal.show(TripsUserComponent, item, this);
  }
  solicitar(item) {
    if (this.solicitudactiva) {
      if (this.solicitudactiva.premio == item.nombre) {
        //QUIERE ELIMINAR LA SOLICITUD???
        this.presentAlertConfirm(this.translate.instant("uremove") + item.nombre + this.translate.instant("tcosts") + item.coste + "?", item.nombre);
      } else {
        this.dialog.alert(this.translate.instant("waitingaproval"), "");
      }
    } else {
      if (+item.coste <= this.puntos) {
        //QUIERES SOLICITARLA??.
        this.presentAlertConfirm(this.translate.instant("urequest") + item.nombre + this.translate.instant("tcosts") + item.coste + "?", item.nombre, item.coste);
      } else {
        this.dialog.alert(this.translate.instant("nopoints"), "")
      }
    }
  }
  userlista(event) {
    this.userdata().then(() => {
      event.target.complete();
    })
  }
  userdata() {
    this.viajes = [];
    this.solicitudactiva = null;
    this.solicitudpasada = null;
    return new Promise((resolve, reject) => {
      this.cloud.getIdFromName(this.authS.getId()).then((d) => {
        this.iduser = d['iduser'];
        this.viajestotales = d['viajes'];
        this.puntos = d['puntos'];
        this.puntostotales = d['total'];
        this.CO2 = Math.round(this.viajestotales * 2 * 0.15 * 100) / 100;
        this.cloud.getTripsOfUser(this.authS.getId()).then((t) => {
          t.forEach((t) => {
            this.viajes.push({ 'fecha': t.data().fecha });
          })
          this.cloud.getReqsOfUser(this.iduser).subscribe((r) => {
            if (r.exists) {
              if (r.data().estado == 0) { /* */
                this.solicitudactiva = r.data();
              } else {
                this.solicitudpasada = r.data();
              }
            }
            resolve();
          })

        })
      })
    })
  }

  getImagen(d?) {
    let img;
    if (d) {
      img = d;
    } else {
      img = this.authS.avatar;
    }
    if (img != environment.defaultAvatar)
      return this.sanitizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }

  async presentAlertConfirm(msg, premio, coste?) {
    const alert = await this.alertController.create({
      header: '',
      message: msg,
      cssClass: 'profalert',
      buttons: [
        {
          text: this.translate.instant("cancel"),
          role: 'cancel',
          cssClass: 'cancelo',
          handler: (blah) => {
            console.log("Cancelo petición")
            alert.dismiss();
          }
        }, {
          text: 'Ok',
          cssClass: 'ok',
          handler: () => {
            alert.dismiss();
            this.loading.show("");
            console.log("OK");
            if (coste) {
              this.cloud.request(this.iduser, premio, coste).then(() => {
                this.userdata().then(() => {
                  this.loading.hide();
                });
              });
            } else {
              this.cloud.removerequest(this.iduser).then(() => {
                this.userdata().then(() => {
                  this.loading.hide();
                });
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
