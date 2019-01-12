import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { CloudService } from './cloud.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomToastModule } from '../customModules/custom-toast/custom-toast.module';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  isConnected;
  disconnectSubscription;
  connectSubscription;
  /*Es el servicio que controla si hay red, en caso negativo lo comunica al usuario y al servicio cloud
  , cuando vuelve la red lo comunica al usuario y al servicio cloud, ejecutado su metodo doQueue*/
  constructor(private network: Network, private toast: CustomToastModule,
    private cloud: CloudService, private translate: TranslateService) {
    this.isConnected = true;
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.isConnected = false;
      this.cloud.isConnected = this.isConnected;
      this.toast.showTop(this.translate.instant("nointernet"));
    });
    // watch network for a connection
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.isConnected == false) {
          this.isConnected = true;
          this.cloud.isConnected = this.isConnected;
          this.toast.showTop(this.translate.instant("internet") + this.network.type, 3000);
          this.cloud.doQueue();
        }
      }, 3000);
    });
  }


}
