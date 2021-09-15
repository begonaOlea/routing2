import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistarUsuarioReactComponent } from 'src/app/registar-usuario-react/registar-usuario-react.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarDesactivar2Guard implements CanDeactivate<RegistarUsuarioReactComponent> {
  canDeactivate(
    component: RegistarUsuarioReactComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return true;
  }
  
}
