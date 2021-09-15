import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistarUsuarioReactComponent } from './registar-usuario-react/registar-usuario-react.component';
import { HttpClientModule } from '@angular/common/http';
import { EntradasBlogComponent } from './entradas-blog/entradas-blog.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './servicios/usuarios.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AuthComponent } from './auth/auth.component';
import { LoginService } from './auth/login.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthGuard } from './shared/guardian/auth.guard';
import { ConfirmarDesactivarGuard } from './shared/guardian/confirmar-desactivar.guard';
import { UtilidadesModule } from './utilidades/utilidades.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    RegistrarUsuarioComponent,
    RegistarUsuarioReactComponent,
    EntradasBlogComponent,
    UsuariosComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    UtilidadesModule

  ],
  providers: [ServersService, UsuariosService, LoginService, AuthGuard, ConfirmarDesactivarGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
