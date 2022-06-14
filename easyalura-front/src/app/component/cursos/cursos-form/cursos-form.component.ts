import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Curso } from "src/app/model/curso";
import { CursosService } from "src/app/services/cursos.service";

@Component({
    selector: 'app-cursos-form',
    templateUrl: './cursos-form.component.html'
})
export class CursosFormComponent {

    cadastroCursoForm: FormGroup

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private cursosService: CursosService
    ) {
        // Model-driven Validation
        this.cadastroCursoForm = formBuilder.group({
            titulo: ['', Validators.required],
            instrutor: ['', Validators.required],
            cargaHoraria: ['', [Validators.required, Validators.min(2), Validators.max(30)]]
        });
    }

    salvaCurso() {

    //    const curso: Curso = {
    //     titulo: this.cadastroCursoForm.get('titulo')?.value,
    //     instrutor: this.cadastroCursoForm.get('instrutor')?.value,
    //     cargaHoraria: this.cadastroCursoForm.get('titulo')?.value,
    //    };

        const curso: Curso = this.cadastroCursoForm.getRawValue();


        this.cursosService.salvaCurso(curso)
            .subscribe(() => this.router.navigate(['']))
    }

}