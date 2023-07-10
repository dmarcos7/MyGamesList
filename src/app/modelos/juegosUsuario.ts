import { Juego } from "./juego";
import { Usuario } from "./usuario";

export interface JuegosUsuario{
    id: number;
    estado: string;
    juego: Juego;
    usuario: Usuario;
}