import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: any = '';
  rol: any = '';
  constructor(private activatedRoute: ActivatedRoute) {
    if (sessionStorage.getItem('usuario') != null || sessionStorage.getItem('rol') != null) {
      this.username = sessionStorage.getItem('usuario');
      console.log('USUARIO: '+this.username);
      this.rol = sessionStorage.getItem('rol');
    }
  }

  ngOnInit(): void {
  }

}
