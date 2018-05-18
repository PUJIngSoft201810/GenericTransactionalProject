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
import { TutoriaaddComponent } from './generic/educacion/tutoria-add/tutoriaadd.component';
import { TutoriaViewComponent } from './generic/educacion/tutoria-view/tutoria-view.component';
import { PublicarComponent } from './generic/publicar/publicar.component';
import { EducacionAddComponent } from './generic/educacion/educacion-add/educacion-add.component';
import { MascotasAddComponent } from './generic/mascotas/mascotas-add/mascotas-add.component';
import { EventosAddComponent } from './generic/eventos/eventos-add/eventos-add.component';
import { ServicioService } from './generic/share/services/servicio.service';
import { LocalizacionComponent } from './generic/localizacion/localizacion.component';
import { EscenarioComponent } from './generic/eventos/escenario/escenario.component';
import { OfertaeventosComponent } from './generic/eventos/ofertaeventos/ofertaeventos.component';
import { VistaEventoComponent } from './generic/eventos/vistaevento/vistaevento.component';
import { DraggableModule } from './generic/eventos/draggable/draggable.module';

import {DragulaModule} from 'ng2-dragula';
import { DrawDropComponent } from './generic/eventos/draw-drop/draw-drop.component';
import { EscenarioViewComponent } from './generic/eventos/escenario-view/escenario-view.component';
import { ZonaViewComponent } from './generic/eventos/zona-view/zona-view.component';
//import { DraggableDirective } from './generic/eventos/draggable/draggable.directive';
//import { MovableDirective } from './generic/eventos/draggable/movable.directive';


//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OfertasComponent,
    TutoriaaddComponent,
    TutoriaViewComponent,
    PublicarComponent,
    EducacionAddComponent,
    MascotasAddComponent,
    EventosAddComponent,
    LocalizacionComponent,
    EscenarioComponent,
    OfertaeventosComponent,
    VistaEventoComponent,
    DrawDropComponent,
    EscenarioViewComponent,
    ZonaViewComponent,
    //DraggableDirective,
    //MovableDirective
    //Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, DragulaModule
    , DraggableModule
   /* ,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLRWRZQVih4fmVqTPTXuJ9c4b9MXgdsnA'
    })*/
  ] ,
 // providers: [Service],
  providers: [TutoriaService,ServicioService],
 bootstrap: [AppComponent]
})
export class AppModule { }
