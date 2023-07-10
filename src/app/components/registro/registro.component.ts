import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario={
    id:0,
    email:'',
    password:'',
    username:'',
    rol:'user',
    imagen:''
  }
  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarse(){
    this.usuariosService.registrarUsuario(this.usuario).subscribe((u:Usuario)=>{
      this.usuario = u;
    });
    sessionStorage.setItem('usuario',this.usuario.username);
    sessionStorage.setItem('rol', this.usuario.rol);
    this.router.navigateByUrl('/juegos').then(()=>{
      location.reload();
    });
  }

}
