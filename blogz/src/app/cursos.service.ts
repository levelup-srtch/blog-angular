import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) {
  }

  buscaCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:3000/cursos');
  }

}
