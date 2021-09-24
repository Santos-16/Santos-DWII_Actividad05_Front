import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseURL ="http://localhost:8090/rest/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  listausuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseURL);
  }
}
