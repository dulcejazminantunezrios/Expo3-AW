import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { SeriesComponent } from './componentes/series/series.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import {DefaultComponent} from './componentes/default/default.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
