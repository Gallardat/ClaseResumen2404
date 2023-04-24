import { Component } from '@angular/core';
import { ServicioService } from '../_servicio/servicio.service';
@Component({
  selector: 'app-servicio-comp',
  templateUrl: './servicio-comp.component.html',
  styleUrls: ['./servicio-comp.component.css']
})
export class ServicioCompComponent {


saludos:string=""
constructor(private miservicio: ServicioService ){
this.saludos=this.miservicio.saludos
}




}
