import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/modelos/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-alta-juego',
  templateUrl: './alta-juego.component.html',
  styleUrls: ['./alta-juego.component.css']
})
export class AltaJuegoComponent implements OnInit {
  juego:Juego = {
    id: 0,
    descripcion: '',
    imageUrl: '',
    titulo:''
  };
  correcto: boolean = false;
  mostrar: boolean = false;
  mensaje: string ='';
  modificado: boolean=false;
  constructor(private juegosService: JuegosService, private activatedRoute: ActivatedRoute) {
    var id=this.activatedRoute.snapshot.params['id'];
    if(id!=null){
      this.juegosService.getById(id).subscribe((j:Juego)=>{
        this.juego = j;
      });
    }
   }

  ngOnInit(): void {
  }
  resetForm(){
    this.juego={
      id:0,
      descripcion:'',
      imageUrl:'',
      titulo:''
    }
  }

  insertarOModificar(){
    if(this.juego.id!=0){
      this.modificarJuego();
    }else{
      this.insertarJuego();
    }
  }

  insertarJuego(){
    this.juegosService.insertarJuego(this.juego).subscribe((j:Juego)=>{
      this.juego = j;
      this.mostrar = true;
      this.correcto = true;
      this.cambiarDiv();
    }, error =>{
      this.mostrar = true;
      this.correcto = false;
      this.cambiarDiv();
    });
    
  }

  modificarJuego(){
    this.juegosService.modificar(this.juego.id,this.juego).subscribe((j:Juego)=>{
      this.juego = j;
      this.mostrar = true;
      this.correcto = true;
      this.cambiarDiv();
    }, error =>{
      this.mostrar = true;
      this.correcto = false;
      this.cambiarDiv();
    });
  }

  private cambiarDiv(){
    let div = document.getElementById('alerta');

    if(this.correcto && this.juego.id==0){
      this.mensaje = 'Se ha añadido correctamente';
      if(div != null){
        div.classList.add('alert-success');
      }
      

    }else if(this.correcto && this.juego.id!=0){
      this.mensaje = 'Se ha modificado correctamente';
      if(div != null){
        div.classList.add('alert-success');
      }
    }else{
      this.mensaje = 'Se ha producido un error. No se ha podido realizar la operacion';
      if(div != null){
        div.classList.add('alert-danger');
      }
    }
  }

}
