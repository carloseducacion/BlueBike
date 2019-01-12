import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../servicios/authentication.service';
import { Router } from '@angular/router';
import { Input } from '@angular/compiler/src/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { CloudService } from '../servicios/cloud.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('user') userinput;
  @ViewChild('pass') passinput;
  
  private todo : FormGroup;
  private myloading:any;
  private exitB:any;

  constructor(
            private formBuilder: FormBuilder,
            private loadingController:LoadingController,
            private translate:TranslateService,
            private authS:AuthenticationService,
            private router:Router,
            private toastCtrl: ToastController,
            private platform:Platform,
            private keyboard: Keyboard,
            private cloud:CloudService
    ){
    //Creamos el grupo de formulario
    this.todo = this.formBuilder.group({ 
      user: ['', Validators.compose([Validators.required,
        Validators.pattern('^[p](.)+')])],  //mail's teachers begins by p
      pass: ['', Validators.required]
      });
      
    }
    ionViewCanEnter(){
      return !this.authS.isLogged();
    }
    ionViewCanLeave(){
      return !this.authS.isLogged();
    }
    ionViewWillLeave(){ 
    }
    ionViewWillEnter(){  /*when go back */
      if(this.authS.isLogged()){
        if(this.authS.getRole()=="prof"){
          this.router.navigate(['profesor']);
        }else{
          this.router.navigate(['usuario']);
        }
      }
    }
    loginQR(){
      this.router.navigate(['usuario/login']);
    }
    logForm(){ 
      this.myloading=this.presentLoading(); 

      
      this.authS.logInTeacher(this.todo.value).subscribe(data=>{
          if(data['token']){
            this.authS.setId(this.todo.value.user,"prof").then(result=>{
              /* login as a teacher successfully */
              this.loadingController.dismiss().then(()=>{
                this.authS.avatar=this.cloud.getPic(this.todo.value.user).then((d)=>{
                  this.authS.avatar=d;
                  this.router.navigate(['profesor']);   //Esto no lo tengo claro
                });
                
              });
              
            })
            .catch(err=>{
              /* error saving data in local, but credentials are correct*/
              console.log(err);
              this.loadingController.dismiss();
            });
          }else{
            /* credentials aren't correct */
            this.loadingController.dismiss();
            this.presentToastWithOptions(this.translate.instant("errorCredentials"));
            this.userinput.setFocus();
            this.keyboard.show();  //mostramos teclado
          }
          
      });
      //this.loadingController.dismiss();
    }
    async presentLoading() {
      this.myloading = await this.loadingController.create({
      message: this.translate.instant("loging...") });
      await this.myloading.present(); 
    }
    async presentToastWithOptions(msg) {
      const toast = await this.toastCtrl.create({
        message: msg,
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Ok',
        duration: 5000
      });
      toast.present();
    }
    isLogged(){
      return this.authS.isLogged();
    }
    /* 
      Está función es ejecuta al pulsar enter en los campos input del formulario: ver
      código html para conocer cómo se controla el evento
      Controlamos que ocurre si el usuario está iniciado sesión en el formulario
      con el teclado abierto y pulsa enter. 
      En ese caso si estamos en el campo usuario tabulamos a contraseña.
      En el caso de estar en contraseña mandamos el formulario para proceder a inicio de sesión
      */
    handleLogin(e){
      if(e.srcElement['id']=="user"){
        this.passinput.setFocus();
        this.keyboard.show();
      }
      if(e.srcElement['id']=="pass"){
        if(this.todo.valid){
          this.logForm();
        }
      }
    }
}
