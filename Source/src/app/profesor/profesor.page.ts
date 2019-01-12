import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private authS:AuthenticationService) { }

  ngOnInit() {
  }
  ionViewCanLeave(){
    return (!this.authS.isLogged() || this.authS.getRole()!="prof");
  }
  ionViewCanEnter(){
    return (!this.authS.isLogged() && this.authS.getRole()=="prof");
  }

}
