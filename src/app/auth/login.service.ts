import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuarioLogeado } from './usuariologeado';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario: UsuarioLogeado = { uid: undefined, email: undefined , token: undefined};
  private isLogged: boolean = false;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,) { }


  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(respuesta => {
        console.log(respuesta);
        this.usuario.uid = respuesta.user.uid;
        this.usuario.email = respuesta.user.email;
        this.usuario.token = respuesta.user.refreshToken;
        this.isLogged = true;
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log('Hubo un error de autenticación: ', err.message);
      });
  }

  get usuarioLogeado(): UsuarioLogeado {
    return this.usuario;
  }

  get isLoggedIn(): boolean {
    return this.isLogged;
  }


//llama FireBase para dar de alta un nuevo usuario y clave
    emailSignup(email: string, password: string) {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Sucess', value);
          this.router.navigateByUrl('/home');
        })
        .catch(error => {
          console.log('Something went wrong: ', error);
        });
  }
}
