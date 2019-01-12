import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CloudService } from 'src/app/servicios/cloud.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-u-ranking',
  templateUrl: './u-ranking.page.html',
  styleUrls: ['./u-ranking.page.scss'],
})
export class URankingPage implements OnInit {

  listadoRanking: any = [];  //lista de usuarios del ranking
  urlFirst = null;  //url del avatar del primero
  urlSecond = null;  //url del avatar del segundo
  urlThird = null;   //url del avatar del tercero

  //referencia al elemento ion-infinite-scroll
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;

  constructor(private route: ActivatedRoute,
    private loading: CustomLoadingModule,
    private cloud: CloudService,
    private sanatizer: DomSanitizer) { }

  ngOnInit() {
    /*Solo cargo el ranking la primera vez que se carga la vista, si se visitan otras
    pestañas y se vuelve no se carga para aumentar la fluidez de la aplicación.
    Si se quiere refrescar se debe deslizar la vista hacia abajo (refresher)*/
    this.updateRanking(null, true);
  }
  ionViewWillEnter() {
    /* No queremos hacer nada cada vez que se carga la vista*/
  }

  /*
  Carga asíncronamente la lista de usuarios en la variable listadoRanking por orden de puntos totales,
  para ello se debe crear un índice en firebase. Si el índice no se crea da error por consola indicando
  los pasos para crearlo y poder ordenar.
  Si recibe una variable event es que ha sido llamado desde el refresher o el infiniteScroll, si no
  la recibe ha sido llamada por la carga inicial de la página.
  Si recibe la variable reload es que debes limpiar la lista y cargar desde el principio, si no
  la recibe es porque es llamado desde infiniteScroll para añadir elementos al final de la lista
   */
  updateRanking(event?, reload?) {
    if (!event)
      this.loading.show("");  //si es carga por visita activamos loading principal

    this.cloud.getRanking(reload).then(d => {
      if (reload) {
        this.listadoRanking = d;  //carga completa
      } else {
        d.forEach((u) => {
          this.listadoRanking.push(u); //añadimos al final
        });
      }
      if (!event)
        this.loading.hide();
      if (event) {
        event.target.complete();
      }
      if (this.listadoRanking[0])
        this.urlFirst = this.listadoRanking[0].avatar;
      if (this.listadoRanking[1])
        this.urlSecond = this.listadoRanking[1].avatar;
      if (this.listadoRanking[2])
        this.urlThird = this.listadoRanking[2].avatar;
      
       /*Comprobamos si hay más elementos a cargar o no. En caso afirmativo no desactivamos
       el infiniteScroll*/
      this.ionInfiniteScroll.disabled = !this.cloud.isRInfinityScrollEnabled();
    });
  }
  /* Este método transforma el código en base64 de la imagen en seguro para poder 
  inyectarlo en el campo src de la imagen, en caso contrario dará error de seguridad*/
  getImagen(img) {
    if (img != environment.defaultAvatar)
      return this.sanatizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }

}
