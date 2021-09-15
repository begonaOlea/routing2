import { Injectable, ComponentRef } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './cancomponentdeactivate';
import { RegistarUsuarioReactComponent } from 'src/app/registar-usuario-react/registar-usuario-react.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarDesactivarGuard  implements CanDeactivate<RegistarUsuarioReactComponent> {

  canDeactivate(component: RegistarUsuarioReactComponent,
           route: ActivatedRouteSnapshot, 
           state: RouterStateSnapshot) {

     let url: string = state.url;
     console.log('Url: '+ url);
     
     if (component.miForm.dirty){
        const confirmacion = window.confirm('¿Quiere abandonar el formulario sin aplicar cambios?');
        if(confirmacion){
          component.miForm.reset();
        }
        return confirmacion;
     }
     return true;
  }
}