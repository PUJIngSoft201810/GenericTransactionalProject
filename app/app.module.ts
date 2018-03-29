import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './generic/home/home.component';
import { LoginComponent } from './generic/login/login.component';
import { OfertasComponent } from './generic/educacion/ofertas/ofertas.component';
import { TutoriaService } from './generic/share/services/tutoria.service';
import { TutoriaaddComponent } from './generic/educacion/tutoriaadd/tutoriaadd.component';
import { TutoriaViewComponent } from './generic/educacion/tutoria-view/tutoria-view.component';
import { EventosComponent } from './generic/eventos/eventos.component';
import { HerramientasComponent } from './generic/eventos/herramientas/herramientas.component';
import { EventoService } from './generic/share/services/evento.service';
import { AddEventoComponent } from './generic/eventos/add-evento/add-evento.component';
import { CalificarComponent } from './generic/eventos/calificar/calificar.component';
import { OfertasEventosComponent } from './generic/eventos/ofertas-eventos/ofertas-eventos.component';
import { VistaEventoComponent } from './generic/eventos/vista-evento/vista-evento.component';
import { EditarEventoComponent } from './generic/eventos/editar-evento/editar-evento.component';
import { EditorComponent } from './generic/eventos/editor/editor.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OfertasComponent,
    TutoriaaddComponent,
    TutoriaViewComponent,
    EventosComponent,
    HerramientasComponent,
    AddEventoComponent,
    CalificarComponent,
    OfertasEventosComponent,
    VistaEventoComponent,
    EditarEventoComponent,
    EditorComponent,
    
    //Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ] ,
 // providers: [Service],
  providers: [TutoriaService,EventoService],
  
 bootstrap: [AppComponent]
})
export class AppModule { }
