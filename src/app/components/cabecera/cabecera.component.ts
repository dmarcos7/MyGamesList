import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  nombre: string = '';
  rol: any = '';
  username:any;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    if (sessionStorage.getItem('rol') != null && sessionStorage.getItem('usuario')!=null) {
      this.rol = sessionStorage.getItem('rol');
      this.username=sessionStorage.getItem('usuario');
    }
  }

  ngOnInit(): void {
  }

  navegarAHome() {
    console.log('Entro a navegarHome');
    this.route.navigateByUrl("/juegos/" + this.nombre);
  }

  desconectarse(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('rol');
  }

  verPerfil(){
    this.route.navigateByUrl("/perfil/"+this.username)
  }

}
