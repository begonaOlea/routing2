import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../registrar-usuario/user';

@Component({
  selector: 'app-registar-usuario-react',
  templateUrl: './registar-usuario-react.component.html',
  styleUrls: ['./registar-usuario-react.component.css']
})
export class RegistarUsuarioReactComponent implements OnInit {

  genders = ['male', 'female'];
  miForm: FormGroup;

  userInicial = {
    username: 'Luis',
    email: 'luis@test.com',
    gender: 'male'
  }

  constructor() { }

  ngOnInit(): void {
    this.miForm = new FormGroup(
      {
        'username': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'gender': new FormControl('male')
      }
    );

    this.miForm.setValue({
      username: this.userInicial.username,
      email: this.userInicial.email,
      gender: this.userInicial.gender
    });

    this.miForm.valueChanges.subscribe(
      (datos => {
        if (datos.username === 'Luis') {
          console.log(datos);
        }
      })
    );

    // this.miForm.get('username').valueChanges.subscribe();


    this.miForm.statusChanges.subscribe(
      (estado) => console.log(estado)
    );

  }

  onSubmit(): void {
    console.log(this.miForm);
    const nuevoUsuario = this.miForm.value;
    // this.miForm.valid;
    console.log('envio para alta ' + JSON.stringify(nuevoUsuario));
    console.log('¿Ha cambiado?');

    const igual = JSON.stringify(this.userInicial) === JSON.stringify(this.miForm.value);
    console.log(!igual);
    console.log(JSON.stringify(this.miForm.value));
    console.log(JSON.stringify(this.userInicial));

    this.miForm.patchValue({
      username: 'otro'
    });

    this.miForm.setValue({
      username: '',
      email: '',
      gender: ''
    });

  }

}
