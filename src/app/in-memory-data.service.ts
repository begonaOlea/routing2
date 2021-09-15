import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

constructor() { }

  createDb(){

    const users = [
    {id: 11, nombre: 'Luis Ramos'},
    {id: 12, nombre: 'Maria Rosst'},
    {id: 13, nombre: 'Eneko Blanco'},
    {id: 14, nombre: 'Mark Tust'},
    {id: 15, nombre: 'Magneta Soto'},
    {id: 16, nombre: 'Ruben Izquierdo'},
    ];
    return {users};
  }
}
  
