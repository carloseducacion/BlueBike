import { Injectable, Injector } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
import { iReq } from '../model/iReq';
import { AuthenticationService } from './authentication.service';
import { iUser } from '../model/iUser';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
/* Es el servicio encargado de la conexión con Cloud Storage de Firebase*/
export class CloudService {
  userCollection: AngularFirestoreCollection<any>;
  reqCollection: AngularFirestoreCollection<any>;
  tripCollection: AngularFirestoreCollection<any>;
  systemCollection: AngularFirestoreCollection<any>;
/*Variables para el infiniteScroll de la pestaña usuarios de profe*/
  lastUserLoaded = null;  //último usuario cargado
  lastlastUserLoaded = null;  //último cargado esta vez, si es igual al anterior, entonces no hay más que cargar
  scrollUserEnabled = true;  //está el infiniteScroll habilitado porque se haya cumplido lo anterior

/*Variables para el infiniteScroll de la pestaña ranking*/
  rlastUserLoaded = null;
  rlastlastUserLoaded = null;
  rscrollUserEnabled = true;

  viajestotales = 0;
  usuariostotales = 0;

  queue = [];   //tareas a realizar cuando vuelva internet, no implementado
  isConnected = true;  //saber si estamos con red para realizar conexiones o almacenarlas en queue


  constructor(private fireStore: AngularFirestore,
    private authS: AuthenticationService,
    private sanitizer: DomSanitizer
  ) {
    /*Hago las referencias a las colecciones diseñadas para la app*/
    this.userCollection = fireStore.collection<any>(environment.usersColection);
    this.reqCollection = fireStore.collection<any>(environment.requestCollection);
    this.tripCollection = fireStore.collection<any>(environment.tripsCollection);
    this.systemCollection = fireStore.collection<any>(environment.sistemCollection);
  }
  /* Compruebo si un usuario ya tiene un viaje registrado hoy*/
  addTripcheck(id) {
    const d: Date = new Date();
    const today = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    return this.tripCollection.ref.where("fecha", "==", today).where("nombre", "==", id).get();
  }
  /* añadir viaje a usuario */
  addTripdo(id) {
    let info = "";
    let iduser = null;
    return new Promise((resolve, reject) => {
      this.getIdFromName(id).then((d) => {
        if (d["info"] == "newuser") {
          console.log("El usuario se ha creado ojo");
        }
        let data = {
          viajes: +d['viajes'] + 1,
          puntos: +d['puntos'] + environment.pointstotrip,
          total: +d['total'] + environment.pointstotrip
        }
        this.userCollection.doc(d['iduser']).update(data).then(() => {
          //toca añadirlo a la tabla viajes.
          const dd: Date = new Date();
          const today = dd.getDate() + "/" + (dd.getMonth() + 1) + "/" + dd.getFullYear();
          this.newTrip(d['iduser'], d['nombre'], today).then(() => {
            resolve(d);
          })
        })
      })
    })
  }
  /* Añado el viaje a la colección */
  newTrip(user, name, datetrip) {
    return this.tripCollection.ref.add({ 'usuario': user, 'nombre': name, 'fecha': datetrip });
  }
  /* Obtengo el id del usuario por su nombre, si no existe, se crea */
  getIdFromName(name) {
    let resolv = {
      iduser: null,
      nombre: name,
      info: "",
      viajes: 0,
      puntos: 0,
      total: 0
    }
    return new Promise((resolve, reject) => {
      this.userCollection.ref.where("nombre", "==", name).get().then(d => {
        if (d.docs.length == 0) {
          resolv.info = "newuser";
        } else {
          resolv.iduser = d.docs[0].id;
          resolv.puntos = d.docs[0].data().puntos;
          resolv.total = d.docs[0].data().total;
          resolv.viajes = d.docs[0].data().viajes;
        }
        if (resolv.iduser == null) {
          //creamos usuario
          this.newUser(name).then((d) => {
            resolv.iduser = d.id;
            resolv.puntos = environment.pointstonewUser;
            resolv.total = environment.pointstonewUser;
            resolve(resolv);
          });
        } else {
          resolve(resolv);
        }
      })
    })
  }
  /* Creamos un usuario */
  newUser(id) {
    let newuser = {
      'nombre': id,
      'role': "user",
      'puntos': environment.pointstonewUser,
      'total': environment.pointstonewUser,
      'viajes': 0,
      'avatar': environment.defaultAvatar
    }
    return this.userCollection.add(newuser);
  }
  /* Eliminamos una solicitud concreta, el id de la solicitud es la misma que la del usuario porque
  un usuario no puede tener más de una solicitud activa */
  removeReq(id): Promise<any> {
    return this.reqCollection.doc(id).delete();
  }
  /* Eliminamos usuario */
  removeUser(id): Promise<any> {
    return this.userCollection.doc(id).delete().then(d => {
      return this.reqCollection.doc(id).delete();
    });
  }
  /* Premiamos a un usuario +x puntos */
  grantUser(id) {
    let currentpoints = 0;
    let currenttotal = 0;
    return new Promise((resolve, reject) => {
      this.userCollection.doc(id).get().subscribe((d) => {
        if (d.data().puntos) {
          currentpoints = d.data().puntos;
        }
        if (d.data().total) {
          currenttotal = d.data().total;
        }
        currentpoints += +environment.defaultGrant;
        currenttotal += +environment.defaultGrant;
        this.userCollection.doc(id).update({ 'puntos': currentpoints, 'total': currenttotal }).then(() => {
          resolve();
        })
      });
    });
  }
  /* Aprobamos una solicitud: estado=1 */
  aproveReq(r): Promise<any> {
    let data = {
      "estado": 1,
      "premio": r.premio,
      "aprobado": this.authS.getId(),
      "coste": r.coste,
      "usuario": r.key
    }
    return this.userCollection.doc(r["key"]).update({ 'puntos': (r.puntos - r.coste) }).then((d) => {
      return this.reqCollection.doc(r["key"]).set(data);
    }
    );
  }
  isInfinityScrollEnabled() {
    return this.scrollUserEnabled;
  }
  isRInfinityScrollEnabled() {
    return this.rscrollUserEnabled;
  }
  /* Carga de usuarios: en caso de no estar presente la variable reload, se añaden los siguientes
  10 al final de la lista */
  getUsers(reload?): Promise<iUser[]> {
    if (reload) {
      this.lastlastUserLoaded = null;
      this.scrollUserEnabled = true;
    }
    this.lastUserLoaded = this.lastlastUserLoaded;
    return new Promise((resolve, reject) => {
      let lreq: iUser[] = [];
      let query;
      if (this.lastUserLoaded == null) {
        /* Obtengo los primeros 10 usuarios ordenados por nombre. Para ordenar es necesario
        activar un índice en firebase. Si no se crea dará un error por consola indicando los pasos
        necesarios para crearlo */
        query = this.userCollection.ref.where("role", "==", "user").orderBy("nombre", "asc").limit(10).get();
      } else {
        /* Cargamos 10 a partir del último cargado */
        query = this.userCollection.ref.where("role", "==", "user").orderBy("nombre", "asc").startAfter(this.lastUserLoaded).limit(10).get();
      }
      query.then((d) => {
        d.forEach((u) => {
          let x = { "key": u.id, ...u.data() };
          if (!x['avatar'] || x['avatar'] == "")
            x['avatar'] = environment.defaultAvatar;
          lreq.push(x);
        });
        this.lastlastUserLoaded = d.docs[d.docs.length - 1];
        if (d.docs.length < 10) {
          this.scrollUserEnabled = false;
        }
        /* Cargo estadística general del sistema: número total de viajes y de usuarios.
        Estos datos se almacenan y refrescan de forma automática mediante Google Cloud Functions
        Se puede saber cómo se han programado en la carpeta functions del proyecto */
        this.systemCollection.doc("stats").get().subscribe((v) => {
          if (v.data().viajes)
            this.viajestotales = v.data().viajes;
          if (v.data().usuarios)
            this.usuariostotales = v.data().usuarios;
          resolve(lreq);
        })
      })
    })
  }
  /* Elimina la solicitud del usuario*/
  removerequest(user) {
    return this.reqCollection.ref.doc(user).delete()
  }
  /* Graba una solicitud */
  request(user, present, cost) {
    let data = {
      "aprobado": 0,
      "coste": cost,
      "estado": 0,
      "premio": present,
      "usuario": user
    }
    return this.reqCollection.doc(user).set(data);
  }
  /* Ejecuta la lista de tareas pendientes cuando vuelve internet, esta función
  es llamada desde el servicio que controla la gestión de la red */
  doQueue() {
    while (this.isConnected && this.queue.length > 0) {
      let a = this.queue.pop()
      //TODO
    }
  }
  /* Devuelve los viajes de un usuario ordenados por fecha */
  getTripsOfUser(name) {
    return this.tripCollection.ref.where("nombre", "==", name).orderBy("fecha", "desc").get();
  }
  /*Devuelve la petición de un usuario, los campos son: aprobado, coste, estado, premio, usuario */
  getReqsOfUser(id) {
    return this.reqCollection.doc(id).get()
  }
  /* Devuelve lista de peticiones o solicitudes*/
  getReqs(): Promise<iReq[]> {
    return new Promise((resolve, reject) => {
      let lreq: iReq[] = [];
      this.reqCollection.ref.where("estado", "==", 0).get().then((snapshot) => {
        snapshot.forEach((req) => {
          let x: iReq = {};
          let d = req.data();
          x["key"] = req.id;
          x["estado"] = 0;
          x["coste"] = d.coste;
          x["premio"] = d.premio;
          x["aprobador"] = "";
          this.userCollection.doc(d.usuario).get().subscribe(ud => {
            let ux = ud.data();
            x["nombre"] = ux.nombre;
            x["puntos"] = ux.puntos;
            if (!ux.avatar || ux.avatar == "")
              x["avatar"] = environment.defaultAvatar;
            else
              x["avatar"] = ux.avatar;
          });
          lreq.push(x);
        });
        resolve(lreq)
      });
    })
  }
/*Actualiza información del usuario*/
  updateField(id, data) {
    return new Promise((resolve, reject) => {
      this.userCollection.ref.where("nombre", "==", id).get().then(d => {  //en vez de get onsnapshot en tiempo real
        if (d.docs.length > 0) {
          this.userCollection.doc(d.docs[0].id).update(data).then(() => {
            resolve();
          });

        } else {
          this.userCollection.add(data).then(() => {
            resolve();
          });
        }
      });
    });
  }
  /* Obtiene el avatar del usuario */
  getPic(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userCollection.ref.where("nombre", "==", id).get().then(d => {
        if (d.docs.length > 0) {
          let r = d.docs[0].data();
          if (r.avatar != "") {  //SANITIZE
            resolve(r.avatar);
          } else {
            resolve(environment.defaultAvatar);
          }
        } else {
          resolve(environment.defaultAvatar);
        }
      });
    });
  }
/* Obtiene la lista de usuario ordenados por puntos. Está programado para ser compatible con 
infiniteScroll mediante la variable reload */
  getRanking(reload?): Promise<iUser[]> {
    if (reload) {
      this.rlastlastUserLoaded = null;
      this.rscrollUserEnabled = true;
    }
    this.rlastUserLoaded = this.rlastlastUserLoaded;
    return new Promise((resolve, reject) => {
      let lreq: iUser[] = [];
      let query;
      if (this.rlastUserLoaded == null) {
        query = this.userCollection.ref.where("role", "==", "user").orderBy("total", "desc").limit(10).get();
      } else {
        query = this.userCollection.ref.where("role", "==", "user").orderBy("total", "desc").startAfter(this.rlastUserLoaded).limit(10).get();
      }
      query.then((d) => {
        d.forEach((u) => {
          let x = { "key": u.id, ...u.data() };
          if (!x['avatar'] || x['avatar'] == "")
            x['avatar'] = environment.defaultAvatar;
          lreq.push(x);
        });
        this.rlastlastUserLoaded = d.docs[d.docs.length - 1];
        if (d.docs.length < 10) {
          this.rscrollUserEnabled = false;
        }
        resolve(lreq);
      })
    })
  }
}
