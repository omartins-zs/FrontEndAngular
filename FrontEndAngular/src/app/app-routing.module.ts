import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

const routes: Routes = [
    //   {path:'detalhes/:id', component: DetalhesComponent },
    { path: '', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'editar/:id', component: EditarComponent },
    { path: 'detalhes/:id', component: DetalhesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
