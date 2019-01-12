import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { iProps } from '../model/iProps';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
/*
Es un servicio básico de autenticación.
Para saber si está logueado empleamos una base de datos local donde guardamos datos como el 
id del usuario, el idioma y el tema elegido. En caso de que existan esas variables
en la base de datos local el usuario estará logueado y no volverá a mostrar la página inicial
de login. 
No proporciona mecanismos de seguridad como almacenamiento de token y comprobación por servicio 
de que el token es correcto. Es decir, confía simplemente en una variable almacenada
en local en claro.
*/
export class AuthenticationService {
  props: iProps = {};
  avatar;

  constructor(private storage: Storage,
    public httpClient: HttpClient) {
    this.props.logged = false;
    this.props.id = "";
    this.props.role = "user";
    this.props.lang = environment.defaultLanguage;
    this.props.skin = environment.defaultSkin;
    this.avatar = environment.defaultAvatar;

    
  }
  /*Comprueba si estamos loguados y carga las variables de la base de datos local*/
  initChecking() {
    return new Promise((resolve, reject) => {
      this.storage.get('props').then((val: iProps) => {
        if (val && val != {} && val != "" && val != [] && val != "[]" && val.id) {
          this.props = val;
        }
        resolve("Props loaded correctly");
      })
        .catch(err => {
          console.log(err);
          reject("Error loading props on local storage");
        });
    });
  }
  logInTeacher(data) {
    if (data.user == environment.hackuser && data.pass == environment.hackpass) {
      return of({ 'token': 'justhacking' });
    } else {
      let getParams = "&username=" + data.user + "&password=" + data.pass;
      return this.httpClient.get(environment.moodleEndPoint + getParams);
    }
  }
  getPropsDB() {
    return this.storage.get('props');
  }
  isLogged(): Boolean {
    return this.props.logged;
  }
  getLang() {
    return this.props.lang;
  }
  getSkin() {
    return this.props.skin;
  }
  getRole() {
    return this.props.role;
  }
  getId() {
    return this.props.id;
  }
  getProps() {
    return this.props;
  }
  setProps(props: iProps) {
    this.props = props;
    return this.storage.set("props", this.props)
  }
  setRole(val) {
    this.props.role = val;
    return this.storage.set("props", this.props);
  }
  setSkin(val) {
    this.props.skin = val;
    return this.storage.set("props", this.props);
  }
  setLang(val) {
    this.props.lang = val;
    return this.storage.set("props", this.props);
  }
  setId(val, role?) {
    this.props.id = val;
    this.props.logged = true;
    if (!role)
      this.props.role = "prof";
    else
      this.props.role = role;
    return this.storage.set("props", this.props);
  }
  logOut() {
    return new Promise((resolve, reject) => {
      this.props.logged = false;
      this.storage.remove('props').then(() => {
        this.initChecking().then(d => {
          resolve();
        }).catch(err => {
          reject();
        });
      }).catch(err => {
        console.log("err");
        reject('Error removing props element on local storage');
      });

    });
  }
}
