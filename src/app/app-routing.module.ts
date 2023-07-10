import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaJuegoComponent } from './components/alta-juego/alta-juego.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalleJuegoComponent } from './components/detalle-juego/detalle-juego.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'alta', component: AltaJuegoComponent},
  {path:'modificar/:id', component: AltaJuegoComponent},
  {path:'juegos', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'juego/:id', component: DetalleJuegoComponent},
  {path:'juegos/:nombre', component: HomeComponent},
  {path:'registro', component: RegistroComponent},
  {path:'perfil/:nombre', component: PerfilComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
