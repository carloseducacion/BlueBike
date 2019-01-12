import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private authS: AuthenticationService) { }

  ngOnInit() {
  }
  ionViewCanLeave(){
    /*Se supone que no podrías abandonar si devuelves false, pero no esá funcionando*/
    return (!this.authS.isLogged() || this.authS.getRole()!="user");
  }
  ionViewCanEnter(){
    /*Se supone que no podrías entrar en esta página si no devuelves true, pero no está funcionando*/
    return (this.authS.isLogged() && this.authS.getRole()=="user");
  }

}
