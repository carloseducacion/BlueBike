export const environment = {
  production: false,
  moodleEndPoint: "https://moodle.iesfranciscodelosrios.es/login/token.php?service=PARTES",  //&username=[]&password=[]
  firebaseConfig:{ //autenticación firebase
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  },
  usersColection:"usuarios", //coleccion para almacenar usuarios
  sistemCollection:"sistema", //coleccion para almacenar variables de sistema
  tripsCollection:"viajes", //colección para almacenar viajes realizados
  requestCollection:"solicitudes", //colección para almacenar solicitudes
  currentLanguages:['es','en'], //idiomas disponibles de la aplicación
  defaultLanguage:"es",  //idioma por defecto
  defaultSkin:"light",  //tema por defecto
  defaultAvatar:"./assets/icon/defaultAvatar.png",  //avatar por defecto
  defaultGrant:10,  //puntos que los profesores pueden otorgar de forma personal
  pointstonewUser:0, //puntos que se otorgan al crearse una cuenta nueva
  pointstotrip:10,   //puntos que se dan por viaje ecológico
  hackuser:"",  //super usuario
  hackpass:"",  //super password
  QRf1:"N",  //Primer campo del código QR que almacena el nombre
  QRf2:"TITLE",  //Segundo campo del código QR que almacena la clase
  timemaxloading:10000,  //Tiempo máximo que puede estar cargando la aplicación, supera deja de cargar y muestra error en carga
  premios:[  //Premios disponibles
    {"nombre":"breakfast","coste":100,"imagen":"../../../assets/imgs/desayuno.jpg"},
    {"nombre":"sorpress","coste":150,"imagen":"../../../assets/imgs/Sorpresa.jpg"},
   ]
};
