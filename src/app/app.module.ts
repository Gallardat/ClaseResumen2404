import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoonebindingComponent } from './twoonebinding/twoonebinding.component';
import { FormsModule } from '@angular/forms';
import { ServicioCompComponent } from './servicio-comp/servicio-comp.component';
import { ServicioService } from './_servicio/servicio.service';
import { DirectivasComponent } from './directivas/directivas.component';
import { Padre1Component } from './padre1/padre1.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { PadreHijo1Component } from './padre-hijo1/padre-hijo1.component';
import { PadreHijo2Component } from './padre-hijo2/padre-hijo2.component';
import { HijoPadre1Component } from './hijo-padre1/hijo-padre1.component';
import { HijoPadre2Component } from './hijo-padre2/hijo-padre2.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OnewaybindingComponent,
    EventoComponent,
    TwoonebindingComponent,
    ServicioCompComponent,
    DirectivasComponent,
    Padre1Component,
    Hijo1Component,
    Padre2Component,
    Hijo2Component,
    PadreHijo1Component,
    PadreHijo2Component,
    HijoPadre1Component,
    HijoPadre2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
