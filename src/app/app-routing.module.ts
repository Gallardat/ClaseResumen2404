import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwoonebindingComponent } from './twoonebinding/twoonebinding.component';
import { EventoComponent } from './evento/evento.component';
import { ServicioCompComponent } from './servicio-comp/servicio-comp.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Padre1Component } from './padre1/padre1.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { PadreHijo1Component } from './padre-hijo1/padre-hijo1.component';
import { HijoPadre1Component } from './hijo-padre1/hijo-padre1.component';
import { HijoPadre2Component } from './hijo-padre2/hijo-padre2.component';

const routes: Routes = [
  {path:"interpolacion",component:InterpolacionComponent},
  {path:"oneway",component:OnewaybindingComponent},
  {path:"twoway",component:TwoonebindingComponent},
  {path:"evento",component:EventoComponent},
  {path:"servicio",component:ServicioCompComponent},
  {path:"directivas",component:DirectivasComponent},
  {path:"padre1",component:Padre1Component},
  {path:"hijo1/:id",component:Hijo1Component},
  {path:"padre2",component:Padre2Component},
  {path:"hijo2",component:Hijo2Component},
  {path:"padrehijo1",component:PadreHijo1Component},
  {path:"hijopadre2",component:HijoPadre1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
