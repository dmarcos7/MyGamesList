import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../modelos/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private urlBase: string ="http://localhost:8080";
  private httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  public getAll():Observable<Juego[]>{
    const url = this.urlBase + "/juegos";
    return this.http.get<Juego[]>(url, this.httpOptions);
  }

  public insertarJuego(j:Juego):Observable<Juego>{
    const url = this.urlBase +"/juegos/alta";
    return this.http.post<Juego>(url,j,this.httpOptions);
  }

  public getById(id:number):Observable<Juego>{
    const url = this.urlBase + "/juego/"+id;
    return this.http.get<Juego>(url, this.httpOptions);
  }

  public borrar(id:number):Observable<never>{
    const url = this.urlBase + "/juegos/borrar/"+id;
    return this.http.delete<never>(url, this.httpOptions);
  }

  public modificar(id:number, juego:Juego):Observable<Juego>{
    const url = this.urlBase +"/juegos/modificar/"+id;
    return this.http.put<Juego>(url, juego,this.httpOptions);
  }

  public obtenerPorNombre(nombre:string):Observable<Juego[]>{
    const url = this.urlBase + "/juegos/"+nombre;
    return this.http.get<Juego[]>(url, this.httpOptions);
  }
}
