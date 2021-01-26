import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {PeliculasComponent} from './componentes/peliculas/peliculas.component'
import {SeriesComponent} from './componentes/series/series.component'
import {DefaultComponent} from './componentes/default/default.component'
import { EdadGuard } from './edad.guard';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'peliculas/:id', component: PeliculasComponent, canActivate:[EdadGuard] },
  { path: 'series/:nombre', component: SeriesComponent, canActivate:[EdadGuard] },
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
