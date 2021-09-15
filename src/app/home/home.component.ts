import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, Observable, fromEvent } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';
import { UsuarioLogeado } from '../auth/usuariologeado';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private miSuscripcion: Subscription;
  private observable: Observable<any>;

  usuario: UsuarioLogeado;

  finalizado = false;


  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    // this.miSuscripcion =  interval(1000).subscribe(
    //     (contador) => { console.log(contador); }
    // );

    //  const obs = new Observable(
    //     observer  => {
    //       let c = 1;
    //       while (c <= 1000){
    //         observer.next(c);
    //         c++;
    //         if (c === 20){
    //         //  observer.error(new Error('Fall�  algo'));
    //         }
    //       }
    //       observer.complete();

    //     }
    //   );

    
      this.usuario = this.loginService.usuarioLogeado;

      const obs = interval(100).pipe(
        filter( (d) => (d % 2) === 0),
        takeWhile( () => !this.finalizado )
      );

     this.miSuscripcion = obs.subscribe(
        dato => {console.log(dato); },
        error => {console.log(error.message); },
        () => { console.log('termino!!!'); }
      );



      const ESC_KEY = 27;
      const nameInput = document.getElementById('name') as HTMLInputElement;

     this.observable = fromEvent(nameInput, 'keydown');
      const suscriptor = this.observable.subscribe(
        (e: KeyboardEvent) => {
          if(e.keyCode === ESC_KEY){
            nameInput.value = 'borrado';
          }
        }
      );


  }

  ngOnDestroy(): void{
     this.miSuscripcion.unsubscribe();
  }

  onReloadServers(): void{
    this.router.navigate(['/servers']);
  }


  onFinalizar(): void{
    console.log('pedir finaliar.....');
    this.finalizado = true;
  }






}
