import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CloudService } from 'src/app/servicios/cloud.service';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { CustomToastModule } from 'src/app/customModules/custom-toast/custom-toast.module';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  id = null;

  constructor(private qrScanner: QRScanner, private alertController: AlertController,
    private translate: TranslateService, private navCtrl: NavController,
    private loading: CustomLoadingModule,
    private cloud: CloudService,
    private dialogs: Dialogs,
    private vibration: Vibration,
    private toast: CustomToastModule,
    private authS: AuthenticationService) { }
  scanSub: any;

  ionViewWillLeave() {
    //Es llamado cuando realizamos una navegación porque ya hemos escaneado el QR
    window.document.querySelector('ion-app').classList.remove('cameraView');
    this.qrScanner.hide().then(() => {
      this.qrScanner.destroy();
    });
  }

  ngOnDestroy() {
    //Es llamado cuando salimos de la página pulsando el botón atrás.
    window.document.querySelector('ion-app').classList.remove('cameraView');
    this.qrScanner.hide().then(() => {
      this.qrScanner.destroy();
    });
  }
  ngOnInit() { }
  ionViewWillEnter() {
    this.id = null;
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        //Cámara preparada
        if (status.authorized) {
          this.qrScanner.show();  //Mostramos cámara
          window.document.querySelector('ion-app').classList.add('cameraView');  //ocultamos vista de la app
          this.scanSub = this.qrScanner.scan().subscribe((d) => {
            this.analizeData(d);  //Hemos leído un QR y vamos a analizarlo
          });
        } else if (status.denied) {
          /* No hay permisos, abrimos configuración de permisos*/
          console.log("denied");
          this.qrScanner.openSettings();
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          console.log("other denied");
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  analizeData(d: string) {
    //BEEP
    this.dialogs.beep(1);
    this.vibration.vibrate(500);
    let regex = new RegExp("[\\r\\n]" + environment.QRf1 + "\\:(.+)", "i");
    let test = d.match(regex);
    let nombre = null;
    if (test) {
      nombre = test[1];
    }
    regex = new RegExp(environment.QRf2 + "\\:(.+)", "i")
    test = d.match(regex);
    let grupo = null;
    if (test) {
      grupo = test[1];
    }
    this.id = nombre + " " + grupo;
    if (nombre == "" || nombre == null || grupo == "" || grupo == null) {
      this.pauseQR();
      this.dialogs.alert(this.translate.instant("errorQR"),"Error");
      this.resumeQR(); 
    } else {
      this.pauseQR();
      this.presentAlertConfirm(this.translate.instant('loginas') + ":<br><strong style='font-size:1.2rem'>" + this.id + "</strong> ?", this.id);
    }

  }
  pauseQR() {
    this.qrScanner.hide();
    this.qrScanner.pausePreview();
    window.document.querySelector('ion-app').classList.remove('cameraView');
  }
  resumeQR() {
    this.qrScanner.show();
    this.qrScanner.resumePreview();
    this.scanSub = this.qrScanner.scan().subscribe((d) => {
      this.analizeData(d);
    });
    window.document.querySelector('ion-app').classList.add('cameraView');
  }
  closeQR() {
    window.document.querySelector('ion-app').classList.remove('cameraView');
    this.qrScanner.hide().then(() => {
      this.qrScanner.destroy();
    });
    this.scanSub.unsubscribe(); // stop scanning
  }
  LoginUser(id) {
    return new Promise((resolve, reject) => {
      this.cloud.getIdFromName(id).then(() => {
        this.cloud.getPic(id).then((d) => {
          this.authS.avatar = d;
          this.authS.setId(id, "user").then(() => {
            resolve();
          })
        });

      })
    });

  }
  async presentAlertConfirm(msg, id) {
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
            alert.dismiss();
            this.resumeQR();
          }
        }, {
          text: 'Ok',
          cssClass: 'ok',
          handler: () => {
            this.loading.show("");
            this.LoginUser(id).then(() => {
              alert.dismiss();
              this.loading.hide();
              this.navCtrl.navigateBack(['/usuario/home']);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
