import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JuegosUsuario } from '../modelos/juegosUsuario';

@Injectable({
  providedIn: 'root'
})
export class JuegosusuarioService {

  private urlBase: string ="http://localhost:8080";

  private httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) {  
  }

  public insertarJuego(j:JuegosUsuario):Observable<JuegosUsuario>{
    const url = this.urlBase +"/usuario/juegos/insertar";
    return this.http.post<JuegosUsuario>(url,j,this.httpOptions);
  }

}
