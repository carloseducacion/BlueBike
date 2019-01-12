import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trips-user',
  templateUrl: './trips-user.component.html',
  styleUrls: ['./trips-user.component.scss']
})
export class TripsUserComponent implements OnInit {

  data:any;

  constructor(private props:NavParams,
    private modalCtrl:ModalController,
    private translate:TranslateService,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.data=this.props.data;
    console.log(this.data);
  }
  closeModal(changes?)
  {
    this.modalCtrl.dismiss(changes);
  }
  
  getImagen(img){
    if(img!=environment.defaultAvatar)
      return this.sanitizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }

}
