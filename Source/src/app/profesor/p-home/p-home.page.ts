import { Component, OnInit, ViewChild, HostListener, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, IonInfiniteScroll } from '@ionic/angular';
import { iReq } from '../../model/iReq';
import { environment } from 'src/environments/environment';
import { CloudService } from 'src/app/servicios/cloud.service';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CustomModalModule } from 'src/app/customModules/custom-modal/custom-modal.module';
import { SolicitudComponent } from 'src/app/customComponent/solicitud/solicitud.component';
import { iUser } from 'src/app/model/iUser';
import { EditUserComponent } from 'src/app/customComponent/edit-user/edit-user.component'
import { DomSanitizer } from '@angular/platform-browser';
import { BackbuttonService } from 'src/app/servicios/backbutton.service';

@Component({
  selector: 'app-p-home',
  templateUrl: './p-home.page.html',
  styleUrls: ['./p-home.page.scss'],
})
export class PHomePage implements OnInit {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;



  SwipedTabsIndicator: any = null;
  tabs = ["selectTab(0)", "selectTab(1)"];
  listadoReq: iReq[] = [];
  listadoUser: iUser[] = [];
  public category: any = "0";
  ntabs = 2;
  viajestotales = 0;
  usuariostotales = 0;
  CO2 = 0;


  constructor(private route: ActivatedRoute,
    private cloud: CloudService,
    private loading: CustomLoadingModule,
    private modal: CustomModalModule,
    private sanitizer: DomSanitizer,
    private back: BackbuttonService) {

  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }
  ngOnInit() {
    this.updateAll();  //solo la primera vez, por fluidez no cargamos si navegamos por las tabs
  }
  aprobarSolicitud(item) {
    this.modal.show(SolicitudComponent, item, this);
  }
  editUser(item) {
    this.modal.show(EditUserComponent, item, this);
  }
  ionViewWillEnter() {
    this.category = "0";
    this.SwipedTabsSlider.length().then(l => {  //no sería necesario aquí, solo en ngOnInit
      this.ntabs = l;
    });
  }
  /* este método es llamado por le modal cuando se cierra*/
  onModalClose(data?) {
    if (this.category == 1) {
      this.updateUser(false, true);
    } else {
      this.updateReq();
    }
  }
  updateAll(event?) {
    this.loading.show("");
    this.cloud.getReqs().then(d => {
      this.listadoReq = d;
      this.cloud.getUsers(true).then(d => {
        this.viajestotales = this.cloud.viajestotales;
        this.CO2 = Math.round((this.viajestotales * 2 * 0.15) * 100) / 100;
        this.usuariostotales = this.cloud.usuariostotales;
        this.listadoUser = d;
        this.loading.hide();
        if (event) {
          event.target.complete();
        }
      })
    });
  }
  updateReq(event?) {
    if (!event)  //no loading ni con refresher ni infinity-scroll
      this.loading.show("");
    this.cloud.getReqs().then(d => {
      this.listadoReq = d;
      if (!event)
        this.loading.hide();
      if (event) {
        event.target.complete();
      }
    });
  }
  getImagen(img) {
    if (img != environment.defaultAvatar)
      return this.sanitizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }
  updateUser(event?, reload?) {
    if (!event)
      this.loading.show("");
    this.cloud.getUsers(reload).then(d => {
      this.viajestotales = this.cloud.viajestotales;
      this.CO2 = Math.round((this.viajestotales * 2 * 0.15) * 100) / 100;
      this.usuariostotales = this.cloud.usuariostotales;
      if (reload) {
        this.listadoUser = d;
      } else {
        d.forEach((u) => {
          this.listadoUser.push(u);
        });
      }
      if (!event)
        this.loading.hide();
      if (event) {
        event.target.complete();
      }
      this.ionInfiniteScroll.disabled = !this.cloud.isInfinityScrollEnabled();
    });
  }
/* Actualiza la categoría que esté en ese momento activa*/
  updateCat(cat: Promise<any>) {
    cat.then(dat => {
      this.category = dat;
      this.category = +this.category; //to int;
      if (this.category == 1) {
        if (this.cloud.isInfinityScrollEnabled()) {
          this.ionInfiniteScroll.disabled = false;
        } else {
          this.ionInfiniteScroll.disabled = true;
        }
      } else {
        this.ionInfiniteScroll.disabled = false;
      }
    });
  }
  /* El método que permite actualizar el indicado cuando se cambia de slide*/
  updateIndicatorPosition() {
    this.SwipedTabsSlider.getActiveIndex().then(i => {
      if (this.ntabs > i) {  // this condition is to avoid passing to incorrect index
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
      }
    });
  }
  /* El método que anima la "rayita" mientras nos estamos deslizando por el slide*/
  animateIndicator(e) {
    //console.log(e.target.swiper.progress);
    if (this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
        ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
  }
}
