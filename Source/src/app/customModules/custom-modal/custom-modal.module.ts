import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { BackbuttonService } from 'src/app/servicios/backbutton.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomModalModule {
  public changes = false;

  constructor(public modalCtrl: ModalController, private back: BackbuttonService) { }

  async show(component, props, callback) {
    this.back.openModal = true;
    const modal = await this.modalCtrl.create({
      cssClass: "my-modal",
      backdropDismiss: true,
      component: component,  //El componente que se inyecta en la ventana modal
      componentProps: props   //Los parámetros que se le pasan a la ventana modal
    });
    modal.onDidDismiss().then((d) => {
      //returns true so callback 
      this.back.openModal = false;
      if (d.data) {
        if (callback.onModalClose)
          callback.onModalClose(d.data)
      }   //Evento que queremos que haga cuando se cierre, ver más eventos
    });
    return await modal.present();
  }
}
