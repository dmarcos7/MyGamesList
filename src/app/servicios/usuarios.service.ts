import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../modelos/juego';
import { JuegoLogIn } from '../modelos/juegologin';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlBase: string ="http://localhost:8080";
  private httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  public obtenerUsuarioPorEmail(email:string):Observable<Usuario>{
    const url = this.urlBase + '/usuario/'+email;
    return this.http.get<Usuario>(url, this.httpOptions);
  }

  public registrarUsuario(usuario:Usuario):Observable<Usuario>{
    const url=this.urlBase + '/usuario';
    return this.http.post<Usuario>(url, usuario,this.httpOptions);
  }

  public obtenerJuegosPorUsuario(username:string):Observable<JuegoLogIn[]>{
    const url = this.urlBase+'/usuario/juegos/'+username;
    return this.http.get<JuegoLogIn[]>(url, this.httpOptions);
  }

  public obtenerUsuarioPorNombre(username:string):Observable<Usuario>{
    const url = this.urlBase+'/usuario/nombre/'+username;
    return this.http.get<Usuario>(url, this.httpOptions);
  }
}
