import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/modelos/juego';
import { JuegosUsuario } from 'src/app/modelos/juegosUsuario';
import { Usuario } from 'src/app/modelos/usuario';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { JuegosusuarioService } from 'src/app/servicios/juegosusuario.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() texto: string ='';
  juegos: Juego[] = [];
  @Input() username: any;
  @Input() rol: any;
  juegosUsuario: JuegosUsuario={
    id:0,
    estado:'enproceso',
    juego:{
      id:0,
      titulo:'',
      descripcion:'',
      imageUrl:''

    },
    usuario:{
      id: 0,
      email:'',
      password:'',
      username:'',
      rol:'',
      imagen:''
    }
  }
  usuario: Usuario={
    id: 0,
    email: '',
    password:'',
    username:'',
    rol:'',
    imagen:''
  };
  constructor(private juegosService: JuegosService, private router: Router, private juegosUsuarioService:JuegosusuarioService, private usuariosService: UsuariosService) {
    console.log(this.texto);
    this.username = sessionStorage.getItem('usuario');
    this.usuariosService.obtenerUsuarioPorNombre(this.username).subscribe((u:Usuario)=>{
      console.log(u);
      this.usuario = u;
    });
    if(this.texto!=''){
      this.buscarPorNombre();
    }else{
      this.actualizarLista();
    } 
  }

  ngOnInit(): void {
  }

  onVerDetalle(id: number): void{
    this.router.navigateByUrl("/juego/"+id);
  }

  onBorrarJuego(id:number):void{
    this.juegosService.borrar(id).subscribe(()=>{
      this.actualizarLista();
    });
  }

  actualizarLista():void{
    this.juegosService.getAll().subscribe((lista:Juego[])=>{
      this.juegos = lista;
    });
  }

  buscarPorNombre(){
    this.juegosService.obtenerPorNombre(this.texto).subscribe((lista:Juego[])=>{
      this.juegos=lista;
    });
  }

  anadirALista(id:number){
   
    
    this.juegosUsuario.juego.id = id;
    this.juegosUsuario.usuario = this.usuario;
    this.juegosUsuarioService.insertarJuego(this.juegosUsuario).subscribe((u:JuegosUsuario)=>{
      this.juegosUsuario = u;
    });
  }

}
