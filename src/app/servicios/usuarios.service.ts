import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosUrl = 'api/users'; //URL de web api

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl);
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  //PUT
  modificarUsuario(usuario: Usuario): Observable<Usuario>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = `${this.usuariosUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario, httpOptions);
  }
  //POST
  crearUsuario(usuario: Usuario): Observable<Usuario>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Usuario>(this.usuariosUrl, usuario, httpOptions);
  }
  //DELETE
  borrarUsuario(id: number): Observable<Usuario>{
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.delete<Usuario>(url);
  }
}
