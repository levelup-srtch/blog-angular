import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursosFormComponent } from "./component/cursos/cursos-form/cursos-form.component";
import { CursosListaComponent } from "./component/cursos/cursos-lista/cursos-lista.component";

const routes: Routes = [
    {   path: '', component: CursosListaComponent },
    {   path: 'form', component: CursosFormComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}