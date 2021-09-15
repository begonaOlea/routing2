import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  defaultQuestion = 'pet';
  answer = '';

  genders = ['male', 'female'];

  user: User;

  @ViewChild('f') signupForm: NgForm;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmint(form: NgForm): void {
    console.log('¿is valid? ' + (!form.invalid));
    console.log('¿is dirty? ' + form.dirty);
    console.log('usuario: ' + form.value.userData.userName);
    console.log('email: ' + form.value.userData.email);

    console.log('secret: ' + form.value.secret);
    console.log('genere ' + form.value.gender)


    if (form.dirty && !form.invalid){
      this.user = {
        username: form.value.userData.userName,
        email: form.value.userData.email,
        secretQuestion: form.value.secret,
        answer: form.value.questionAnswer,
        gender: form.value.gender

      };
      this.submitted = true;
      form.reset();
    }

  }

  suggestUserName(): void{
        console.log('.. suggestUserName');
        const suggestedName = 'Superuser';
        this.signupForm.form.patchValue({
          userData: {
            userName: suggestedName
          }
        });
  }


}
