import { NgModule } from '@angular/core';
import { AltasFormComponent } from './altas-form/altas-form.component';
import { AltasService } from './altas.service';



@NgModule({
  declarations: [
    AltasFormComponent,
  ],
  imports: [
  ],
  exports:[
    AltasFormComponent
  ],
  providers:  [AltasService]
})
export class UtilidadesModule { }
