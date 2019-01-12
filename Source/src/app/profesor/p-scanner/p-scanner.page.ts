import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CloudService } from 'src/app/servicios/cloud.service';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { environment } from 'src/environments/environment';
import { CustomToastModule } from 'src/app/customModules/custom-toast/custom-toast.module';

@Component({
  selector: 'app-p-scanner',
  templateUrl: './p-scanner.page.html',
  styleUrls: ['./p-scanner.page.scss'],
})
export class PScannerPage implements OnInit {
  id = null;

  constructor(private qrScanner: QRScanner, private alertController: AlertController,
    private translate: TranslateService, private navCtrl: NavController,
    private loading: CustomLoadingModule,
    private cloud: CloudService,
    private dialogs: Dialogs,
    private vibration: Vibration,
    private toast: CustomToastModule) { }
  scanSub: any;

  ionViewWillLeave() {
    window.document.querySelector('ion-app').classList.remove('cameraView');
    this.qrScanner.hide().then(() => {
      this.qrScanner.destroy();
    });
  }

  ngOnDestroy() {
    window.document.querySelector('ion-app').classList.remove('cameraView');
    this.qrScanner.hide().then(() => {
      this.qrScanner.destroy();
    }); // hide camera preview

  }
  ngOnInit() { }
  ionViewWillEnter() {
    this.id = null;
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          window.document.querySelector('ion-app').classList.add('cameraView');
          this.scanSub = this.qrScanner.scan().subscribe((d) => {
            this.analizeData(d);

          });
        } else if (status.denied) {
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
    //console.log(d);
    let regex = new RegExp("[\\r\\n]" + environment.QRf1 + "\\:(.+)", "i");
    //let test = d.match(/[\r\n]N\:(.+)/i);  //OJO
    let test = d.match(regex);
    let nombre = null;
    if (test) {
      nombre = test[1];
    }
    regex = new RegExp(environment.QRf2 + "\\:(.+)", "i")
    //test = d.match(/TITLE\:(.+)/i); //OJO
    test = d.match(regex);
    let grupo = null;
    if (test) {
      grupo = test[1];
    }
    if (nombre != null && grupo != null) {
      this.id = nombre + " " + grupo;
      this.pauseQR();
      this.presentAlertConfirm(this.translate.instant('addtrip') + ":<br><strong style='font-size:1.2rem'>" + this.id + "</strong> ?", "scan");
    } else {
      this.dialogs.alert(this.translate.instant("errorQR"), "Error");
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
  newScanner() {
    this.presentAlertConfirm(this.translate.instant('newscan'), "exit");
  }




  async presentAlertConfirm(msg, type?) {
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
            if (!type || type == "scan") {
              console.log("No quiero guardar info");
              alert.dismiss();
              this.newScanner();
            } else {
              console.log("Me voy");
              this.closeQR();
              alert.dismiss();
              this.navCtrl.navigateBack(['/profesor/home']);
            }
          }
        }, {
          text: 'Ok',
          cssClass: 'ok',
          handler: () => {
            if (!type || type == "scan") {
              //add trip
              console.log("AÑadir viaje")
              this.loading.show("");
              this.addTrip().then(() => {
                alert.dismiss();
                this.loading.hide();
                this.newScanner();
              });

            } else {
              console.log("Quiero escanear de nuevo")
              this.resumeQR();
              alert.dismiss();
            }
            console.log("OK");
          }
        }
      ]
    });

    await alert.present();
  }
  addTrip() {
    return new Promise((resolve, reject) => {
      if (this.id != null) {
        this.cloud.addTripcheck(this.id).then((d) => {
          console.log(d);
          if (d.docs.length > 0) {
            this.loading.hide();
            this.anOtherTrip(resolve);
          } else {
            console.log("No hay más viajes por ahora")
            this.cloud.addTripdo(this.id).then((d) => {
              console.log("Qué perdido estoy")
              console.log(d);
              resolve();
            })
          }
        })
      } else {
        resolve();
      }
    });

  }
  async anOtherTrip(o) {
    const alert = await this.alertController.create({
      header: '',
      message: this.translate.instant("anothertrip"),
      cssClass: 'profalert',
      buttons: [
        {
          text: this.translate.instant("cancel"),
          role: 'cancel',
          cssClass: 'cancelo',
          handler: (blah) => {
            alert.dismiss();
            this.newScanner();
          }
        }, {
          text: 'Ok',
          cssClass: 'ok',
          handler: () => {
            this.loading.show("");
            this.cloud.addTripdo(this.id).then((d) => {
              console.log(d);
              o();
            })
          }
        }
      ]
    });

    await alert.present();
  }
}

