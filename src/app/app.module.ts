import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddDisponibilidadComponent } from './components/add-disponibilidad/add-disponibilidad.component';
import { AddCicloComponent } from './components/add-ciclo/add-ciclo.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    AddModalidadComponent,
    AddDisponibilidadComponent,
    AddCicloComponent,
    AddUsuarioComponent,
    AddProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
