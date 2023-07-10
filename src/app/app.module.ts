import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { AltaJuegoComponent } from './components/alta-juego/alta-juego.component';
import { FormsModule } from '@angular/forms';

import { DetalleJuegoComponent } from './components/detalle-juego/detalle-juego.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    CarouselComponent,
    AltaJuegoComponent,
    CabeceraComponent,
    DetalleJuegoComponent,
    RegistroComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
