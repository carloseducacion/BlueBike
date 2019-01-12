import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { CloudService } from 'src/app/servicios/cloud.service';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  data:any;
  valid=false;

  constructor(private props:NavParams,
    private modalCtrl:ModalController,
    private cloud:CloudService,
    private loading:CustomLoadingModule,
    private alertController:AlertController,
    private translate:TranslateService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.data=this.props.data;
    if(this.data.puntos>=this.data.coste){
      this.valid=true;
    }
    //console.log(this.props);
  }
  closeModal(changes?)
  {
    this.modalCtrl.dismiss(changes);
  }
  removeReq(id){
    this.loading.show("");
    this.cloud.removeReq(id).then(()=>{
      this.loading.hide();
      this.closeModal(true);
    });
  }
  aproveReq(r){
    this.loading.show("");
    this.cloud.aproveReq(r).then(()=>{
      this.loading.hide();
      this.closeModal(true);
    });
  }
  
async presentAlertConfirm(msg,t,data) {
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
            if(t=='d'){
              this.removeReq(data.key);
            }else{
              this.aproveReq(data);
            }
          }
        }
      ]
    });

    await alert.present();
  }
  getImagen(img){
    if(img!=environment.defaultAvatar)
      return this.sanitizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }

}
