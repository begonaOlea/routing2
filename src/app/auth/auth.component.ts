import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(private loginService: LoginService){}

  onSubmit(form: NgForm) {
    console.log(form.value);
     if(!form.valid){
       console.log('datos form no valido');
       return;
     }

     const email = form.controls.email.value;
     const pwd = form.controls.password.value;
     this.loginService.login(email, pwd);
     form.reset();
  }
}
