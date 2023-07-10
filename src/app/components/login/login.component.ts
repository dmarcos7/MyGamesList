import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    email: '',
    password: '',
    username: '',
    rol: 'user',
    imagen:''
  }
  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    this.usuariosService.obtenerUsuarioPorEmail(this.usuario.email).subscribe((u: Usuario) => {
      this.usuario = u;
      sessionStorage.setItem('usuario', this.usuario.username);
      sessionStorage.setItem('rol', this.usuario.rol);
      if (this.usuario.rol != '') {
        this.router.navigateByUrl("/juegos").then(()=>{
          location.reload();
        });
      }
    });
    

  }

}
