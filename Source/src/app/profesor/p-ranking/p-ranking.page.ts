import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomLoadingModule } from 'src/app/customModules/custom-loading/custom-loading.module';
import { CloudService } from 'src/app/servicios/cloud.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-p-ranking',
  templateUrl: './p-ranking.page.html',
  styleUrls: ['./p-ranking.page.scss'],
})
export class PRankingPage implements OnInit {

  listadoRanking: any = [];
  urlFirst = null;
  urlSecond = null;
  urlThird = null;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;

  constructor(private route: ActivatedRoute,
    private loading: CustomLoadingModule,
    private cloud: CloudService,
    private sanatizer: DomSanitizer) { }

  ngOnInit() {
    this.updateRanking(null, true);
  }
  ionViewWillEnter() {
    //console.log(this.route.snapshot.pathFromRoot[this.route.snapshot.pathFromRoot.length-1].component['name']);
  }
  updateRanking(event?, reload?) {
    //this.listadoUser=[];
    if (!event)
      this.loading.show("");
    this.cloud.getRanking(reload).then(d => {
      console.log(d);
      if (reload) {
        this.listadoRanking = d;
      } else {
        d.forEach((u) => {
          this.listadoRanking.push(u);
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

      this.ionInfiniteScroll.disabled = !this.cloud.isRInfinityScrollEnabled();
    });
  }
  getImagen(img) {
    if (img != environment.defaultAvatar)
      return this.sanatizer.bypassSecurityTrustUrl(img);
    else
      return img;
  }
}
