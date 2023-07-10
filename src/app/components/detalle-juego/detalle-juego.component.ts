import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/modelos/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {
  juego: Juego ={
    id: 1,
    descripcion:'',
    imageUrl:'',
    titulo:''
  }
  username:any;
  rol:any;
  constructor(private route: Router,private activatedRoute: ActivatedRoute, private juegosService: JuegosService) {
      var id=this.activatedRoute.snapshot.params['id'];
      if(id != null){
        this.juegosService.getById(id).subscribe((j:Juego)=>{
          this.juego = j;
          this.username=sessionStorage.getItem('username');
          this.rol = sessionStorage.getItem('rol');
        });
      }
      
   }

  ngOnInit(): void {
  }

  irFormulario():void{
    this.route.navigateByUrl("/modificar/"+this.juego.id);
  }

}
