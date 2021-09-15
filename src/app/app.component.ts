import { Component } from '@angular/core';
import { AltasService } from './utilidades/altas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private s: AltasService){}

}
