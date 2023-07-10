import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/modelos/juego';
import { JuegoLogIn } from 'src/app/modelos/juegologin';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  completados: JuegoLogIn[]=[];
  enProceso: JuegoLogIn[]=[];
  pendientes: JuegoLogIn[]=[];
  username: any = '';
  usuario: Usuario={
    id: 0,
    email: '',
    password:'',
    username:'',
    rol:'',
    imagen:''
  };
  constructor(private usuariosService: UsuariosService) { 
    this.username= sessionStorage.getItem('usuario');
    this.usuariosService.obtenerUsuarioPorNombre(this.username).subscribe((user: Usuario)=>{
      console.log(user);
      this.usuario=user;
    });
    this.usuariosService.obtenerJuegosPorUsuario(this.username).subscribe((lista:JuegoLogIn[])=>{
      console.log(lista);
      this.completados = lista.filter((juego:JuegoLogIn)=> juego.estado=='completado');
      this.enProceso = lista.filter((juego:JuegoLogIn)=> juego.estado=='enproceso');
      console.log(this.enProceso);
      this.pendientes = lista.filter((juego:JuegoLogIn)=> juego.estado=='pendiente');
    });
      
    
  }

  ngOnInit(): void {
  }

}
