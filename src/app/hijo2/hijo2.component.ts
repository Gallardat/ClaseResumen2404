import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {


  id: number=0;
  nombre:string=""
  apellido: string=""
  edad:number=0
  constructor(private ruta: Router, private activarRuta: ActivatedRoute){
    this.id=this.activarRuta.snapshot.queryParams['id']
    this.nombre=this.activarRuta.snapshot.queryParams['nombre']
    this.apellido=this.activarRuta.snapshot.queryParams['apellido']
    this.edad=this.activarRuta.snapshot.queryParams['edad']
  }

ngOnit(){

}
 volver(){
    this.ruta.navigate(['padre2'])
  }
}
