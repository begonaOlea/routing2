import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../servicios/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  usuario: Usuario;
  msg: string;

  mostrarFormulario = false;

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.refescar();
  }

  private refescar(): void {
    this.service.getUsuarios().subscribe(
      (usrs: Usuario[]) => {
        console.log(JSON.stringify(usrs));
        this.usuarios = usrs;
        if (usrs.length > 0) {
          this.usuario = this.usuarios[0];
          this.mostrarFormulario = true;
        }else{
          this.usuario = {id:null, nombre: ''};
        //  this.mostrarFormulario = true;
        }
      }
    );
  }

  onSeleccionado(usuario: Usuario): void {
    this.usuario = usuario;
  }

  onRecuperarUsuarioPorId(): void {
    this.service.getUsuario(this.usuario.id).subscribe(
      (usr: Usuario) => { this.usuario = usr; },
      (err: Error) => { this.msg = 'Usuario no encontrado.' + err.message; }
    );
  }

  onModificarUsuario() {
    console.log('..modificando');
    this.service.modificarUsuario(this.usuario)
      .subscribe(
        () => { this.msg = 'El usuario se modifico con exito '; },
        (err: Error) => { this.msg = 'Error de modificacion'; }
      );
    this.refescar();

  }

  onCrearUsuario() {
    console.log("..creando");
    this.service.crearUsuario(this.usuario)
      .subscribe(
        () => { this.msg = 'El usuario se creo con exito ' },
        (err: Error) => { this.msg = 'Error de creacion' }
      );
    this.refescar();
  }

  onBorrarUsuario() {
    console.log('..borrando');
    this.service.borrarUsuario(this.usuario.id)
      .subscribe(
        () => { this.msg = 'El usuario se borro con exito ' },
        (err: Error) => { this.msg = 'Error de borrado.' + err }
      );
    this.refescar();
  }

}
