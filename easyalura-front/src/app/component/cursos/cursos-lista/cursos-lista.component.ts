import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html'
})
export class CursosListaComponent implements OnInit {

  public cursos: Curso[] = []

  constructor(private cursosService: CursosService) {
  }

  ngOnInit(): void {
    this.cursosService.buscaCursos()
      .subscribe(cursos => this.cursos = cursos)
  }


}
