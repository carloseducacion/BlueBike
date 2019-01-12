import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { CloudService } from 'src/app/servicios/cloud.service';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  data: any;
  grantq = environment.defaultGrant;
  listadoTrip: any = [];

  constructor(private props: NavParams,
    private modalCtrl: ModalController,
    private cloud: CloudService,
    private loading: CustomLoadingModule,
    private alertController: AlertController,
    private translate: TranslateService,
    private sanitizer: DomSanitizer) { }
/* Cuando se carga el modal se leen las propiedades que hayan sido pasadas */
  ngOnInit() {
    this.data = this.props.data;
    console.log(this.data);
    this.cloud.getTripsOfUser(this.data.nombre).then((d) => {
      d.forEach((t) => {
        this.listadoTrip.push({ 'fecha': t.data().fecha });
      })
    })
  }
  /* Este método ejecuta el método dismiss del controlador de modal y pasa parámetros 
  de vuelta opcionalmente*/
  closeModal(changes?) {
    this.modalCtrl.dismiss(changes);
  }
  removeUser(id) {
    this.loading.show("");
    this.cloud.removeUser(id).then(() => {
      this.loading.hide();
      this.closeModal(true);
    });
  }
  grantUser(id) {
    this.loading.show("");
    this.cloud.grantUser(id).then(() => {
      this.loading.hide();
      this.closeModal(true);
    });
  }
  async presentAlertConfirm(msg, t, data) {
    const alert = await this.alertController.create({
      header: '',
      message: this.translate.instant(msg),
      buttons: [
        {
          text: this.translate.instant("cancel"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            alert.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            if (t == 'd') {
              this.removeUser(data.key);
            } else {
              this.grantUser(data.key);
            }
          }
        }
      ]
    });

    await alert.present();
  }
  getImagen(img) {
    if (img != environment.defaultAvatar)
      return this.sanitizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }

}
