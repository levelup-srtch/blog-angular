import { Component } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cursos: Curso[] = []

  constructor(private cursosService: CursosService) {
    this.cursosService.buscaCursos()
      .subscribe(cursos => this.cursos = cursos)
  }

}
