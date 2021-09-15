import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistarUsuarioReactComponent } from './registar-usuario-react/registar-usuario-react.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guardian/auth.guard';
import { ConfirmarDesactivarGuard } from './shared/guardian/confirmar-desactivar.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
  ]},
  { path: 'servers', component: ServersComponent, canActivate:  [AuthGuard]},
  { path: 'servers/:id/edit', component: EditServerComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: 'registro', component: RegistrarUsuarioComponent },
  { path: 'registro-react', component: RegistarUsuarioReactComponent, canDeactivate: [ConfirmarDesactivarGuard] },
  { path: 'usuarios-http', component: UsuariosComponent, canActivate:  [AuthGuard] },
  { path: 'login', component: AuthComponent },
  { path: '**' , redirectTo: 'not-found'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
